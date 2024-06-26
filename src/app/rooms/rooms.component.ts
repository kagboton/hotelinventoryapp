import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-rooms',
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  imports: [
    NgIf,
    NgFor,
    NgClass,
    NgStyle,
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    JsonPipe,
    PercentPipe,
    SlicePipe,
    AsyncPipe,
    DecimalPipe,
    NgbAlert,
    RoomsListComponent,
    HeaderComponent,
  ],
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  // Variables
  hotelName = 'Hilton Hotel';
  numberOfRooms = 100;
  hideRooms = false;
  roomList: RoomList[] = [];
  selectedRoom!: RoomList;

  // Room object
  rooms: Room = {
    totalRooms: 100,
    availableRooms: 85,
    bookedRooms: 15,
  };

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;
  //@ViewChild(HeaderComponent, {static : true}) headerComponent!: HeaderComponent; // force component to be ready inside the parent ngOnInit method

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() {}
  
  ngAfterViewChecked(): void {
  }

  ngAfterViewInit(): void {
    console.log('Header component inside afterViewInit', this.headerComponent);
    console.log(this.headerChildrenComponent.last.title = "Last Title");
    this.headerComponent.title = 'Hilton Palace'; // will produce error in development mode - shoul not in production
  }

  // Initialize the rooms
  ngOnInit(): void {
    console.log('Header component inside ngOnInit', this.headerComponent);
    this.roomList = [
      {
        roomNumber: 101,
        roomType: 'Dual Room',
        amenities: ['Air conditionner', 'Breakfast', 'TV'],
        price: 250,
        checkinTime: new Date('11-May-2024'),
        checkoutTime: new Date('13-May-2024'),
        rating: 4.2,
        availability: 'Room is available',
      },
      {
        roomNumber: 102,
        roomType: 'Premium Room',
        amenities: ['Air conditionner', 'Breakfast', 'TV', 'Wifi'],
        price: 350,
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 4.8,
        availability: 'Room is available',
      },
      {
        roomNumber: 103,
        roomType: 'Deluxe Room',
        amenities: ['Air conditionner', 'Breakfast', 'TV', 'Sofa', 'Wifi'],
        price: 250,
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 3.34798,
        availability: 'Room is not available',
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.hotelName = 'Plazza Atene';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  // Adds a room to existing room list
  addRoom() {
    const room: RoomList = {
      roomNumber: 104,
      roomType: 'Classic Room',
      amenities: ['tv', 'wifi', 'fridge', 'aircondition'],
      price: 98,
      checkinTime: new Date('12-June-2024'),
      checkoutTime: new Date('14-June-2024'),
      rating: 4.67,
      availability: 'Room is available',
    };

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
