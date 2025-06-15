import { Motel } from "./contracts/motel";
import { PartialMonthlyMotel } from "./contracts/partialMonthlyMotel";
import { SummerMonth, WinterMonth } from "./contracts/util.js";
import { Room } from "./contracts/room";

type RoomInfo<T> = Room & { bookedMonths: T[] };
type RoomNumbers = 'A01' | 'A02' | 'A03' | 'B01' | 'B02' | 'B03';

function isRoom(room: unknown): room is Room {
    return typeof room === "object" && room !== null
           && "roomNumber" in room && typeof room.roomNumber === "string" && ['A01', 'A02', 'A03', 'B01', 'B02', 'B03'].includes(room.roomNumber)
           && "totalPrice" in room && typeof room.totalPrice === "number"
           && "cancellationPrice" in room && typeof room.cancellationPrice === "number";
}

export class MonthlyMotel<T extends WinterMonth | SummerMonth> extends PartialMonthlyMotel implements Motel {
    addRoom(room: unknown): string {
        if (!isRoom(room)){
            return "Value was not a Room.";
        }

        if (this._rooms.has(room.roomNumber)){
            return `Room '${room.roomNumber}' already exists.`;
        }
        
        const roomInfo: RoomInfo<T> = {
            roomNumber: room.roomNumber,
            totalPrice: room.totalPrice,
            cancellationPrice: room.cancellationPrice,
            bookedMonths: []
        };

        this._rooms.set(room.roomNumber, roomInfo);
        return `Room '${room.roomNumber}' added.`;
    }

    bookRoom(roomNumber: RoomNumbers, bookedMonth: T): string {
        if (!this._rooms.has(roomNumber)){
            return `Room '${roomNumber}' does not exist.`;
        }

        const room = this._rooms.get(roomNumber);
        if (room?.bookedMonths.includes(bookedMonth)){
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }

        room?.bookedMonths.push(bookedMonth);
        this._totalBudget += room!.totalPrice;
        return `Room '${roomNumber}' booked for '${bookedMonth}`;
    }
    cancelBooking(roomNumber: RoomNumbers, bookedMonth: T): string {
        if (!this._rooms.has(roomNumber)){
            return `Room '${roomNumber}' does not exist.`;
        }

        const room = this._rooms.get(roomNumber);
        if (!room!.bookedMonths.includes(bookedMonth)){
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }

        const index = room!.bookedMonths.indexOf(bookedMonth);
        if (index !== -1) {
            room?.bookedMonths.splice(index, 1);
        }
        this._totalBudget -= room!.cancellationPrice;
        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}`;
    }

    getTotalBudget(): string {
        return `Motel: ${PartialMonthlyMotel.MotelName}\nTotal budget: $${this._totalBudget.toFixed(2)}`;
    }

    private _rooms = new Map<string, RoomInfo<T>>();
    private _totalBudget: number = 0;
}

