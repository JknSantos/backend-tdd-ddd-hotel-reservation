import { inMemoryRoomRepository } from "../../../../test/repositories/in-memory-room-repositories"
import { CreateRoomUseCase } from "./create-room"

let roomRepository: inMemoryRoomRepository
let useCase: CreateRoomUseCase

describe('Create rooms', () => {

    beforeEach(() => {
        roomRepository = new inMemoryRoomRepository()
        useCase = new CreateRoomUseCase(roomRepository)
    })

    test('Must create a room', () => {
        const room = useCase.handle({
            name: 'Suite Presidencial',
            price: 120000,
            image: 'room.jpg'
        })

        expect(room).toBeDefined()
        expect(roomRepository.items[0]?.name).toEqual('Suite Presidencial')
    })
})