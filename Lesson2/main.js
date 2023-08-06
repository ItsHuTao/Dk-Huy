const arrNum = [5, 3, 0, -1, 2, -5];
// const positiveNum = []; //[5,3,2]

// arrNum.forEach((item)=> {
//     if(item > 0){
//         positiveNum.push(item);
//     }
// })

const positiveNum = arrNum.filter((item)=>{
    if (item > 0){
        return true;
    }
    return false;
})

const positiveNum1 = arrNum.filter((item) => item > 0);

console.log(positiveNum);

//2
const products = [
	{ id:1, name: 'Iphone 13', price: 1000, quantity: 10 },
	{ id:2, name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ id:3, name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ id:4, name: 'Airpod 2', price: 100, quantity: 20 },
];
//Filter ra những sản phẩm có số lượng >= 10
const product1 = products.filter((product)=>product.quantity >=10);
console.log(product1);
//Filter ra một mảng ko chua sản pham co id = 3
const product2 = product.filter((product) => product.id !== 3);
const productName = product2.map((product) =>product.name);
console.log(productName);
//(["Iphone 13", "Macbook pro M2", "Airpod 2"])
const checkProduct = (productName) => {
    const filterProduct = products.filter(product => product1.name === productName);
    if(filterProduct.length === 0){
        console.log('ko ton tai');
    } else {
        console.log('ton tai');
    }
}

const checkProduct2 = (productName) => {
    const findProduct = products.findIndex((product) => product.name == productName);
    if (findProduct){
        console.log('ton tai');
    } else {
        console.log('ko ton tai');
    }
}
checkProduct('Iphone 13')
