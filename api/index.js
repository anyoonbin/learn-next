import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

function fetchProducts() {
	return instance.get('/products');
}

function fetchProductById(id) {
	return instance.get(`/products/${id}`);
}

function createCartItem({ id, name, imageUrl, price }) {
	return instance.post('/carts', {
		id: id,
		name,
		imageUrl,
		price,
	});
}

function fetchCarts() {
	return instance.get('/carts');
}

function removeCartItem(id) {
	return instance.delete(`/carts/${id}`);
}

export {
	fetchProducts,
	fetchProductById,
	createCartItem,
	fetchCarts,
	removeCartItem,
};
