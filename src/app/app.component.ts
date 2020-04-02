import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';
  imgUrl: string;
  url: string;

  constructor() {
    this.title = 'Hello';
    this.imgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585818744055&di=32991e25edb6eb221f081b3ddcbd9d52&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F54eecb3dd2e98.jpg';
    this.url = 'https://www.baidu.com';
  }


  onBtnClicked() {
    console.log('hahahahaha');
  }

  onInput(evt: Event) {
    this.title = (<HTMLInputElement>evt.target).value;
  }
}