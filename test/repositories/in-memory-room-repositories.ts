import Room from "../../src/domain/employee/entities/room"
import { RoomRepository } from "../../src/domain/employee/repositories/room-repository"

export class inMemoryRoomRepository implements RoomRepository {
    items: Room[] = []

    create(room: Room): Room {
        this.items.push(room)
        return room
    }
}
