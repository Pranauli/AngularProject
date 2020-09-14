export class Product {
    id: number;
    name: string;
    description: String;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSubO4C3UEKSU0fxprRoyA4YKmLvDCTCkJNFg&usqp=CAU')
    {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}
