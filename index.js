// Inheritance
// class SuperClass { }

// class SubClass extends SuperClass { }
// Singe Inheritance
// class Animal {
//     walk() {
//         console.info(`${this.constructor.name} walk!`);
//     }
// }

// class Cat extends Animal {
//     walk() {
//         console.info(`${this.constructor.name} walked!`);
//     }
// }
// Multilevel Inheritance
// class Animal {
//     walk() {
//         console.log(`${this.constructor.name} walk!`);
//     }
// }

// class Carnivore extends Animal {
//     eat() {
//         console.log(`${this.constructor.name} eat!`)
//     }
// }

// class Cat extends Carnivore { }
// Multiple Inheritance
// let oviparMixins = Base => class extends Base { };

// let viviparMixins = Base => class extends Base { };

// class Ovovivipar { }

// class Snake extends oviparMixins(viviparMixins(Ovovivipar)) { }
// Hierarchical Inheritance
// class Animal {
//     walk() {
//         console.log(`${this.constructor.name} walk!`);
//     }
//  }

//  class Carnivore extends Animal {
//     eat() {
//         console.log(`${this.constructor.name} eat!`);
//     }
//  }

//  class Cat extends Carnivore { }

//  class Lion extends Carnivore { }

//  class Dog extends  Carnivore { }
// Hybrid Inheritance
// Encapsulation
// class DataRepository {
//     constructor() {
//         this._data = [];
//     }

//     setData() {
//         const response = /* tons of logical code to retrieve data */
//             this._data = response.data;
//     }

//     get data() {
//         return this._data;
//     }
// }

// class Animal {
//     walk() {
//         console.log(`${this.constructor.name} walk!`);
//     }
// }

// class Cat extends Animal {
//     walk() {
//         super.walk();
//         console.log(`Yeay! ${this.constructor.name} walked!`);
//     }
// }

// const main = () => {
//     const cat = new Cat();
//     cat.walk()
// };

// main();
// One to Many
// class Seller {
//     constructor(id, name) {
//         this._id = id;
//         this._name = name;
//     }
// }

// class User {
//     constructor(id, name, sellers) {
//         this._id = id;
//         this._name = name;
//         this._sellers = sellers;
//     }
// }
// Aggregation
// class Shop {
//     constructor(id, name) {
//         this._id = id;
//         this._name = name;
//     }

//     set seller(value) {
//         this._seller = value;
//     }

//     get seller() {
//         return this._seller;
//     }
// }

// class Seller {
//     constructor(id, name) {
//         this._id = id;
//         this._name = name;
//     }
// }
// Composition
// class User {
//     constructor(id, name, address) {
//         this._id = id;
//         this._name = name;
//         this._address = address;
//     }
// }

// class Address {
//     constructor(id, location) {
//         this._id = id;
//         this._location = location;
//     }
// }

// const main = () => {
//     const user = new User('1234', 'Khrisna', new Address('123', 'Bandung'));
// };

// main();
// Dependency
// class ShopService {
//     changeProductPrice(price, product) {
//         product.changePrice(price);
//     }
// }

// class Product {
//     constructor(id, name, price) {
//         this._id = id;
//         this._name = name;
//         this._price = price;
//     }

//     changePrice(value) {
//         this._price = value;
//     }
// }
// Specialization
// class Product {
//     constructor(id, name, price) {
//         if (this.constructor === Product) {
//             throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
//         }
//         this._id = id;
//         this._name = name;
//         this._price = price;
//     }
// }

// class ElectronicProduct extends Product {
//     constructor(id, name, price, productionDate) {
//         super(id, name, price);
//         this._productionDate = productionDate;
//     }
// }
// Realization atau Implementation
// class ProductService {
//     constructor() {
//         throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
//     }

//     getProduct(id) {
//         throw new Error('You have to implement the method getProduct!');
//     }
//     calculateProductPrice() {
//         throw new Error('You have to implement the method calculateProductPrice!');
//     }
// }

// class ProductServiceImpl extends ProductService {
//     getProduct(id) {
//         // implementation code
//     }

//     calculateProductPrice() {
//         // implementation code
//     }
// }
// Kasus SRP
// class FoodService {
//     constructor(id, name, date) {
//         this.id = id;
//         this.name = name;
//         this.date = date;
//     }

//     addToStore() {
//         if (!this.isExpired()) {
//             // Add to store
//         }
//     }

//     isExpired() {
//         const stringDateArray = this.date.split("/");
//         const foodDate = new Date(...stringDateArray);
//         return foodDate >= new Date();
//     }
// }
// class FoodService {
//     constructor(id, name, date) {
//         this.id = id;
//         this.name = name;
//         this.date = date;
//     }

//     addToStore() {
//         if (!FoodExpiry.isExpired(this.date)) {
//             // Add to store
//         }
//     }
// }

// class FoodExpiry {
//     static isExpired(date) {
//         const stringDateArray = date.split("/");
//         const foodDate = new Date(...stringDateArray);
//         return foodDate >= new Date();
//     }
// }
// function dontBeBored() {
//     if (morningDay == "bored") {
//         startCoding & getActive;
//     }
//     var startCoding;
//     var &;
//     var getActive;
// }
// Kasus OCP
// class ShippingOrderService {
//     checkout(product, shipping) {
//         const costShipping = shipping.calculate(product);
//         /** Code to do check **/
//     }
// }

// class Shipping {
//     constructor() {
//         if (this.constructor === Shipping) {
//             throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
//         }
//     }

//     /**
//      * Implementation required
//      */
//     calculate(product) {
//         throw new Error('You have to implement the method calculate!');
//     }
// }

// class JNEShipping extends Shipping {
//     calculate(product) {
//         return /** calculate amount of this type with product*/;
//     }
// }

// class TIKIShipping extends Shipping {
//     calculate(product) {
//         return /** calculate amount of this type with product*/;
//     }
// }

// class POSINDOShipping extends Shipping {
//     calculate(product) {
//         return /** calculate amount of this type with product*/;
//     }
// }
// class SiCepatShipping extends Shipping {
//     calculate(product) {
//         return /** calculate amount of this type with product*/;
//     }
// }
