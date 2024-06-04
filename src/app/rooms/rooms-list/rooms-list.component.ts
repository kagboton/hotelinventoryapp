import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  NgClass,
  NgFor,
  NgStyle,
  PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    NgFor,
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    JsonPipe,
    PercentPipe,
    SlicePipe,
    AsyncPipe,
    DecimalPipe,
  ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, DoCheck {
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }
  
  ngDoCheck(): void {
    console.log('on changes was called')
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void { // changes are new data from input
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }


  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
