export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList { 
  roomNumber: number;
  roomType: string;
  amenities: string[];
  price: number;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
  availability: string;
}
