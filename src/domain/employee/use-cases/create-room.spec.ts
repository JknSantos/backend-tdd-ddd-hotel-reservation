import Money from "../../shared/value-objects/money"
import Room from "../entities/room"

type Request = {
    name: string
    price: number
    image: string
}

abstract class RoomRepository {
    abstract create(room: Room): Room
}
class CreateRoomUseCase {

    constructor(private roomRepository: RoomRepository) {}

    handle(data: Request) {
        const price = Money.create(data.price)
        const room = Room.create({...data, price})
        this.roomRepository.create(room)
        return room
    }
}

class RoomMemory implements RoomRepository {
    private rooms: Room[] = []

    create(room: Room): Room {
        this.rooms.push(room)
        return room
    }
}

describe('Create rooms', () => {
    test('Must create a room', () => {
        const roomMemory = new RoomMemory()
        const useCase = new CreateRoomUseCase(roomMemory)
        const room = useCase.handle({
            name: 'Suite Presidencial',
            price: 120000,
            image: 'room.jpg'
        })

        expect(room.name).toEqual('Suite Presidencial')
    })
})