import { inMemoryRoomRepository } from "../../../../test/repositories/in-memory-room-repositories"
import Money from "../../shared/value-objects/money"
import Room from "../entities/room"
import { ListRoomUseCase } from "./list-rooms"

let roomRepository: inMemoryRoomRepository
let useCase: ListRoomUseCase

describe('List rooms', () => {

    beforeEach(() => {
        roomRepository = new inMemoryRoomRepository()
        useCase = new ListRoomUseCase(roomRepository)
    })

    test.only('Must be returned list rooms', async () => {
        const room = Room.create({
            name: 'Suite Presidencial',
            price: Money.create(120000),
            image: 'room.jpg'
        })

        roomRepository.items.push(room)

        const response = await useCase.handle()

        expect(response).toHaveLength(1)
    })
})