import { randomUUID } from "node:crypto"
import Entity from "../../../core/entities/entity"

type EmployeeType = {
    name: string
    email: string
    password: string
    hasWifi: boolean
    hasAir: boolean
    hasKitchen: boolean
    isPetFriendly: boolean
    isAvaiable: boolean
}
export default class Employee extends Entity<EmployeeType> {

    constructor(data: EmployeeType, id?: string) {
        super(data, id)
    }

    get name() {
        return this.attributes.name;
    }

    get email() {
        return this.attributes.email;
    }

    get password() {
        return this.attributes.password;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set email(email: string) {
        this.attributes.email = email;
    }

    set password(password) {
        this.attributes.password = password;
    }
}