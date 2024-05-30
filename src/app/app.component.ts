import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  //template: `<h1>Hi</h1>`,
  styleUrl: './app.component.css',
  //styles: [`h1 { font-family: Lato; color: red; }`]
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Admin';
}
