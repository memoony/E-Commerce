import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import { selectCountProducts } from 'src/app/store/selectors/cart.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalCount$!: Observable<number>;

  user!: User;

  constructor(private userService: UserService, private store: Store) {
    this.totalCount$ = store.select(selectCountProducts);

    this.userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }

  ngOnInit(): void {}

  //* Kullanıcı çıkış metodu.
  logout() {
    this.userService.logout();
  }

  //* user.token bilgisini isAuth şeklinde geriye dönüyor.
  get isAuth() {
    return this.user.token;
  }
}
