import Money from "../../shared/value-objects/money"
import Room from "../entities/room"

type Request = {
    name: string
    price: number
    image: string
}
class CreateRoomUseCase {
    handle(data: Request) {
        const price = Money.create(data.price)
        const room = Room.create({...data, price})
        return room
    }
}

describe('Create rooms', () => {
    test('Must create a room', () => {
        const useCase = new CreateRoomUseCase()
        const room = useCase.handle({
            name: 'Suite Presidencial',
            price: 120000,
            image: 'room.jpg'
        })

        expect(room.name).toEqual('Suite Presidencial')
    })
})