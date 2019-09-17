export class Product {
    id: string
    name: string
    cost: number
    online: string
    category: string
    avalaibilities: any[]

    constructor() {
        this.id = ''
        this.name = ''
        this.cost = undefined
        this.online = ''
        this.category = ''
        this.avalaibilities = [
            { bigBazar: false },
            { dmart: false },
            { reliance: false },
            { megaStore: false },
        ]
    }
}