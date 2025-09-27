import { randomUUID } from "node:crypto"

export default abstract class Entity<T> {
    private entityId: string
    protected attributes: T

    get id() {
        return this.entityId
    }

    protected constructor(attributes: T, id?: string) {
        this.entityId = id ?? randomUUID()
        this.attributes = attributes
    }
}