import { randomUUID } from "node:crypto"

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
export default class Employee {
    private id: string
    private name: string
    private email: string
    private password: string

    constructor(data: EmployeeType, id?: string) {
        this.name = data.name
        this.email = data.email
        this.password = data.password
        this.id = id ?? randomUUID()
    }
}