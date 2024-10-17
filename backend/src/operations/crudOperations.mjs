import fetch from 'node-fetch';

const products = [
    { name: 'Tomato', price: 1.5, company_id: 1 },
    { name: 'Cucumber', price: 2.0, company_id: 1 },
    { name: 'Potato', price: 1.2, company_id: 1 },
];

async function addProduct(product) {
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Product added:', data);
    } else {
        const errorText = await response.text(); // Capture the response text for error
        console.error('Error adding product:', errorText);
    }
}

async function main() {
    for (const product of products) {
        await addProduct(product);
    }
}

main();
