import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RoomsComponent,
    ContainerComponent,
    EmployeeComponent,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: './app.component.html',
  //template: `<h1>Hi</h1>`,
  styleUrl: './app.component.css',
  //styles: [`h1 { font-family: Lato; color: red; }`]
})
export class AppComponent{
  title = 'hotelinventoryapp';

  role = 'Admin';

  @ViewChild('name', { static: true }) name !: ElementRef;

  ngOnInit() { 
    this.name.nativeElement.innerText = "Hotel"; // template reference
  }

  // @ViewChild('rooms', { read: ViewContainerRef })
  // viewContainerRef!: ViewContainerRef; // helps dynamically load a component

  // ngAfterViewInit() { 
  //   const componentRef = this.viewContainerRef.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 57; // change component property
  // }
}
