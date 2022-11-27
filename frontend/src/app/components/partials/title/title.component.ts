import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  //* Başlık değişkeni.
  @Input() title!: string;

  //* Başlığın konumunu belirlemek için kullanılan margin değişkeni.
  @Input() margin? = '1rem 0 1rem 0.2rem';

  //* Başlığın font boyutunu ayarlamak için kullanılan fontSize değişkeni.
  @Input() fontSize? = '1.7rem';

  constructor() {}

  ngOnInit(): void {}
}
