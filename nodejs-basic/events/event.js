const EventEmiter = require("events");

const myEventEmiter = new EventEmiter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
    console.log(`Bil sebesar ${price} telah dibuat!`);
};

// const onCoffeeOrderListener = ({ name, price }) => {
//     makeCoffee(name);
//     makeBill(price);
// };

// mendaftarkan makeCoffee sebagai listener event coffee-order
myEventEmiter.on("coffee-order", makeCoffee);
myEventEmiter.on("coffee-order", makeBill);

// memicu event 'coffee-order' terjadi.
myEventEmiter.emit("coffee-order", { name: "Kapal Api", price: 3000 });
