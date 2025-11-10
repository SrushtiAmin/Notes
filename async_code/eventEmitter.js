const EventEmitter = require('events');

// Create a custom class extending EventEmitter
class OrderSystem extends EventEmitter {
  placeOrder(orderId, amount) {
    console.log(`New order placed: #${orderId}`);
    this.emit('orderPlaced', { orderId, amount });
  }
}

// Create instance
const order = new OrderSystem();

// Listener 1 – process payment
order.on('orderPlaced', (data) => {
  console.log(`Processing payment for Order #${data.orderId} of ₹${data.amount}`);
});

// Listener 2 – send email
order.on('orderPlaced', (data) => {
  console.log(`Sending confirmation email for Order #${data.orderId}`);
});

// Listener 3 – update stock
order.on('orderPlaced', (data) => {
  console.log(`Updating stock for Order #${data.orderId}`);
});

// Emit event (simulate user placing order)
order.placeOrder(101, 499);
