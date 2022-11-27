import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  //* "not-found" component'inin gösterilip gösterilmeyeceği bilgisinin tutulduğu değişken.
  @Input() isVisible = false;

  //* "not-found" component'i gösterilecek ise, ekranda gösterilecek mesajın tutulduğu değişken.
  @Input() message = 'Herhangi bir sonuç bulunamadı!';

  @Input() linkText = 'Sıfırla';

  //* Hangi sayfaya yönlendirileceğinin bilgisinin tutulduğu değişken.
  @Input() linkRoute = '/';

  constructor() {}

  ngOnInit(): void {}
}
