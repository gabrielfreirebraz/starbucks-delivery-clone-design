const enum defaultPath {
  IMAGE = "./shop",
}

export const products: IProduct[] = [
  {
    productId: 1,
    name: "Apple Crisp frappuccino",
    desc: "Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.",
    price: 21.0,
    image: defaultPath.IMAGE + "/coffee1.jpeg",
    quantity: 1,
  },
  {
    productId: 2,
    name: "Apple Crisp frappuccino",
    desc: "Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.",
    price: 18.0,
    image: defaultPath.IMAGE + "/coffee2.jpeg",
    quantity: 1,
  },
  {
    productId: 3,
    name: "Apple Crisp frappuccino",
    desc: "Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.",
    price: 21.0,
    image: defaultPath.IMAGE + "/coffee3.jpeg",
    quantity: 1,
  },
  {
    productId: 4,
    name: "Apple Crisp frappuccino 4",
    desc: "Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.",
    price: 20.5,
    image: defaultPath.IMAGE + "/coffee4.jpeg",
    quantity: 1,
  },
  {
    productId: 5,
    name: "Apple Crisp frappuccino",
    desc: "Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.",
    price: 16.0,
    image: defaultPath.IMAGE + "/coffee5.jpeg",
    quantity: 1,
  },
];
