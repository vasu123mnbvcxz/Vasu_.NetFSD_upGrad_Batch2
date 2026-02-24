// Store product objects in an array
const products = [
    { name: "Pen", price: 10, quantity: 3 },
    { name: "Notebook", price: 50, quantity: 2 },
    { name: "Bag", price: 500, quantity: 1 }
];

// Calculate total cart value using reduce()
const calculateTotal = (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

// Create invoice lines using map()
const invoiceLines = products.map(item =>
    `${item.name} | Price: ₹${item.price} | Quantity: ${item.quantity} | Subtotal: ₹${item.price * item.quantity}`
);

// Get total amount
const totalAmount = calculateTotal(products);

// Display formatted invoice
console.log(`
======= INVOICE =======
${invoiceLines.join("\n")}
-----------------------
Total Amount: ₹${totalAmount}
=======================
`);