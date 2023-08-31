
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
	body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
	body.classList.remove('active');
});

let products = [

	{
		id: 1,
		name: 'Doug Burgum',
		image: '../images/alabama_Candidates/Republicans Images 2022/Governor_Doug_Burgum.jpg',
		price: 1

	},

	{
		id: 2,
		name: 'Chris Christie',
		image: '../images/alabama_Candidates/Republicans Images 2022/Chris-Christie-2012.jpg',
		price: 1

	},

	{
		id: 3,
		name: 'Ron DeSantis',
		image: '../images/alabama_Candidates/Republicans Images 2022/Ron DeSantis.jpeg',
		price: 1

	},

	{
		id: 4,
		name: 'Larry Elder',
		image: '../images/alabama_Candidates/Republicans Images 2022/233047302_4118666394853169_4910890001457705584_n-e1643857362324-pjy6uzy5uj1y4qe1tedzncl8br5ig8zq1ow2rgskwa.jpeg',
		price: 1

	},

	{
		id: 5,
		name: 'Nikki Haley',
		image: '../images/alabama_Candidates/Republicans Images 2022/Nikki-Haley.jpg',
		price: 1

	},

	{
		id: 6,
		name: 'Asa Hutchinson',
		image: '../images/alabama_Candidates/Republicans Images 2022/Asa_Hutchinson_crop.jpg',
		price: 1

	},

];

let listCards = [];

function initApp() {
	products.forEach((value, key) => {
		let newDiv = document.createElement('div');

		newDiv.classList.add('item');
		
		newDiv.innerHTML = `
		<img src='image/${value.image}' />
		<div class='title'>${value.name}</div>
		<div class='price'>${value.price.toLocaleString()}</div>

		<button onclick='addToCard(${key})'>Add To Card</button>
		
		`;

		list.appendChild(newDiv)


	});

}

initApp();

function addToCard(key) {
	if(listCards[key] == null ) {
		listCards[key] = products[key];
		listCards[key].quantity = 1;
	}
	reloadCard();
}

function reloadCard() {
	listCard.innerHTML = '';
	let count = 0;
	let totalPrice = 0;
	listCards.forEach((value, key) => {
		totalPrice = totalPrice + value.price;
		count = count + value.quantity;

		if (value != null) {
			let newDiv = document.createElement('li');
			newDiv.innerHTML = `

				<div><img src='image/${value.image}' /></div>
				<div>${value.name}</div>
				<div>${value.price.toLocaleString()}</div>
				<div>${value.quantity}</div>
				<div>
					<button onclick='changeQuantity(${key}, ${value.quantity - 1})' >-</button>
					<div class='count'>${value.quantity}</div>
					<button onclick='changeQuantity(${key}, ${value.quantity + 1})' >+</button>
				</div>
			
			
			`;

			listCard.appendChild(newDiv);
		}

	});

	total.innerText = totalPrice.toLocaleString();
	quantity.innerText = count;
}

function changeQuantity(key, quantity) {
	if (quantity == 0) {
		delete listCards[key];

	}else {
		listCards[key].quantity = quantity;
		listCards[key].price = quantity * products[key].price;
	}

	reloadCard();
}