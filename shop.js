const blackJacket = {
    id: 1,
    name: 'Black Jacket',
    description: 'Черная кожанная куртка',
    sizes: [46, 48, 50, 52, 54],
    price: 500,
    available: true
}

const blueShoes = {
    id: 2,
    name: 'Blue Shoes',
    description: 'Синие ботинки',
    sizes: [38, 39, 40, 41, 42],
    price: 300,
    available: true
}

const merchShirt = {
    id: 3,
    name: 'Rick and Morty T-shirt',
    description: 'Футболка с логотипом "Рик и Морти"',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 250,
    available: false
}

const regularJeans = {
    id: 4,
    name: 'Regular navy blue jeans',
    description: 'Темно-синие джинсы',
    sizes: [29, 30, 32, 34, 36],
    price: 400,
    available: true
}

const clownHat = {
    id: 5,
    name: 'Clown Hat',
    description: 'Клоунский колпак',
    sizes: ['M', 'L'],
    price: 100,
    available: false
}

const catalog = [blackJacket, blueShoes, merchShirt, regularJeans, clownHat];
const shoppingCart = [];

function addToCart(item, cart=shoppingCart) {
    let flag = true
    cart.forEach(element => {
            if (item == element.good) {
                element.quantity ++;
                flag = false
            }
        });
        if (flag == true) cart.push({good:item, quantity:1})
        return cart
    
}

function deleteFromCart(item, cart=shoppingCart) {
    cart.forEach((element, index) => {
            if (item == element.good) {
                if (element.quantity > 1) element.quantity --;
                else cart.splice(index, 1);
            }
        });
        return cart
    
}

function clearCart(cart=shoppingCart) {
    cart.length = 0
    return cart
}

function showCart(cart=shoppingCart) {
    totalAmount = 0
    totalSumm = 0
    cart.forEach(element => {
        totalAmount += element.quantity
        totalSumm += element.good.price * element.quantity
   });
   return {'totalAmount':totalAmount, 'totalSumm': totalSumm}
}

addToCart(clownHat)
addToCart(regularJeans)
addToCart(clownHat)
addToCart(regularJeans)
deleteFromCart(clownHat)
deleteFromCart(clownHat)
clearCart()
addToCart(regularJeans)
addToCart(blackJacket)
addToCart(blackJacket)
addToCart(blueShoes)
addToCart(regularJeans)
console.log(showCart())