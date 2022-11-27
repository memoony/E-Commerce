import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; //* Login form.
  isSubmitted = false; //* Form bilgisinin gönderilip gönderilmediğinin tutulduğu değişken.
  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setForm();

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  //* loginForm'un build edildiği metot (sonrasında ngOnInit'de çağrılır).
  setForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  //* loginForm içerisindeki elemanları çağırması (ör: this.loginForm.controls.email) syntax olarak kirli duracağından dolayı fc şeklinde kısaltılmıştır.
  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true; //* Form bilgisi gönderildi olarak isSubmitted değişkenine aktarılır.

    if (this.loginForm.invalid) return;

    this.userService
      .login({
        email: this.fc.email.value,
        password: this.fc.password.value,
      })
      .subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }
}
