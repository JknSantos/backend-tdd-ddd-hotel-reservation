import { RoomRepository } from "../repositories/room-repository"

export class ListRoomUseCase {

    constructor(private roomRepository: RoomRepository) {}

    async handle() {

        const rooms = await this.roomRepository.findMany()

        return rooms
    }
}