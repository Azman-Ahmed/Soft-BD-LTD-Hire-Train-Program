var obj = {
    price : 5,
    qty : 11
};

var name  = "product";

function addName (product, name){
    product.name = name;
    name = null;
}

function addName1 (product, productName){
    product.name = productName;
    name = null;
}


addName(obj, name);
console.log(obj, name);

addName1(obj, name);
console.log(obj, name);