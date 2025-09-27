import { randomUUID } from "node:crypto"
import Entity from "../../../core/entities/entity"

type RoomType = {
    name: string
    price: string
    image: string
    hasWifi: boolean
    hasAir: boolean
    hasKitchen: boolean
    isPetFriendly: boolean
    isAvaiable: boolean
}

export default class Room extends Entity<RoomType>{

    constructor(data: RoomType, id: string) {
        super(data, id)
    }

    get name() {
        return this.attributes.name
    }

    get price() {
        return this.attributes.price
    }

    get image() {
        return this.attributes.image
    }

    get hasAir() {
        return this.attributes.hasAir
    }

    get hasKitchen() {
        return this.attributes.hasKitchen
    }

    get hasWifi() {
        return this.attributes.hasWifi
    }

    get isAvaiable() {
        return this.attributes.isAvaiable
    }

    get isPetFriendly() {
        return this.attributes.isPetFriendly
    }

    set name(name: string) {
        this.attributes.name = name
    }

    set price(price: string) {
        this.attributes.price = price
    }

    set image(image: string) {
        this.attributes.image = image
    }

    set hasAir(hasAir: boolean) {
        this.attributes.hasAir = hasAir
    }

    set hasKitchen(hasKitchen: boolean) {
        this.attributes.hasKitchen = hasKitchen
    }

    set hasWifi(hasWifi: boolean) {
        this.attributes.hasWifi = hasWifi
    }

    set isAvaiable(isAvaiable: boolean) {
        this.attributes.isAvaiable = isAvaiable
    }

    set isPetFriendly(isPetFriendly: boolean) {
        this.attributes.isPetFriendly = isPetFriendly
    }
}