import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //? Login işlemi yapıldığında her component içinde kontrol yapılması çok sağlıklı bir işlem olmayacağından dolayı; BehaviorSubject kullanılmıştır.
  //? Tek bir yapı ile, hem component'lerin abone olmasına izin verip hem de login işlemi için kullanışlı yayınlar yapılabilecektir.
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage()
  );

  public userObservable: Observable<User>;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  //* O anki kullanıcı bilgisini dönen metot.
  public get currentUser(): User {
    return this.userSubject.value;
  }

  //* Kullanıcı giriş metodu.
  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          setTimeout(() => {
            this.toastr.success(
              `Hoş geldiniz ${user.name}`,
              'Giriş işlemi başarılı!'
            );
          }, 2000);
        },
        error: (err) => {
          this.toastr.error(err, 'Giriş işlemi sırasında bir hata oluştu!');
        },
      })
    );
  }

  //* Kullanıcı bilgisini Local Storage'a ekleyen metot.
  private setUserToLocalStorage(user: User) {
    localStorage.setItem('User', JSON.stringify(user));
  }

  //* Local Storage'dan kullanıcı bilgilerini getiren metot.
  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem('User');
    return userJson ? (JSON.parse(userJson) as User) : new User();
  }

  //* Kullanıcı çıkış metodu.
  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem('User');
    window.location.reload();
  }
}
