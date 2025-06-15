import { Room } from "./contracts/room";


type RoomNumbers = 'A01' | 'A02' | 'A03' | 'B01' | 'B02' | 'B03';

export class Apartment implements Room {
    constructor(price: number, roomNumber: RoomNumbers, numberOfGuests: number){
        this.roomNumber = roomNumber;
        this.numberOfGuests = numberOfGuests;
        this.totalPrice = price * this.numberOfGuests;
        this.cancellationPrice = this.totalPrice * 0.80;
    }

    readonly roomNumber: RoomNumbers;
    readonly totalPrice: number;
    readonly numberOfGuests: number;
    public readonly cancellationPrice: number;
}    