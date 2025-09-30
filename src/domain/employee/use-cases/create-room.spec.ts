import { inMemoryRoomRepository } from "../../../../test/repositories/in-memory-room-repositories"
import Identity from "../../../core/entities/identity"
import { CreateRoomUseCase } from "./create-room"

let roomRepository: inMemoryRoomRepository
let useCase: CreateRoomUseCase

describe('Create rooms', () => {

    beforeEach(() => {
        roomRepository = new inMemoryRoomRepository()
        useCase = new CreateRoomUseCase(roomRepository)
    })

    test('Must create a room', async () => {
        const room = await useCase.handle({
            name: 'Suite Presidencial',
            price: 120000,
            image: 'room.jpg'
        })

        expect(roomRepository.items[0]?.id).toBeInstanceOf(Identity)
        expect(roomRepository.items[0]?.id.toString()).toEqual(room.id.toString())
        expect(roomRepository.items[0]?.price.formattedPriceBRL()).toEqual(room.price.formattedPriceBRL())
        expect(roomRepository.items[0]?.name).toEqual('Suite Presidencial')
        expect(roomRepository.items[0]?.image).toEqual('room.jpg')
        expect(roomRepository.items[0]?.hasAir).toBeFalsy()
        expect(roomRepository.items[0]?.hasKitchen).toBeFalsy()
        expect(roomRepository.items[0]?.hasWifi).toBeFalsy()
        expect(roomRepository.items[0]?.isPetFriendly).toBeFalsy()
        expect(roomRepository.items[0]?.isAvaiable).toBeTruthy()
    })
})