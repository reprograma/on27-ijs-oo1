class InvoiceItem {
    id;
    description;
    quantity;
    unityPrice; // aqui estão descritos os atributos e o parametro do constructor são os valores

    constructor(id, description, quantity, unityPrice){
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.unityPrice = unityPrice;
    }

}

const recibo = new InvoiceItem(2, 'arroz', 3, 4.50)

console.log(recibo)