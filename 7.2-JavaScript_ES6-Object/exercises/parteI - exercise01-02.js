const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
      fanta: {
        type: 'Fanta Uva',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const customerPhone = order.phoneNumber;
  const street = order['address'].street;
  const number = order.address.number;
  const complement = order.address['apartment'];

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R: ${street}, No: ${number}, Apto: ${complement}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newPerson = order.name = 'Luiz Silva';
  const newOrder = order.order.pizza = {
        muzzarela: {
        amount: 1,
        price: 15,
      },
      calabresa: {
        amount: 1,
        price: 20,
      }
    }
  const pizzas = `${Object.keys(newOrder)[0]}, ${Object.keys(newOrder)[1]}`;
  const drinks = order.order.drinks.fanta.type;
  const quantidade = order.order.drinks.fanta.amount;
  const newTotal = order.payment.total = '50,00';

  console.log(`Olá ${newPerson}, o valor do pedido das 2 pizzas sabores ${pizzas} e ${quantidade} ${drinks} é R$ ${newTotal}.`);
}

orderModifier(order);
