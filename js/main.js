var productName = document.getElementById("product_name");
var productPrice = document.getElementById("product_price");
var productDescription = document.getElementById("product_description");
var vipbtn = document.getElementById("my_btn");

var inputs = document.getElementsByClassName("form-control");
var products = [];
var searchBar = document.getElementById("searchBar");
var updateIndex;
products = JSON.parse(localStorage.getItem("productsList"));
if(products == null){
    products = [];
}
else{
    show();
}
vipbtn.onclick = function(){
    if(vipbtn.innerHTML == "Add"){
        takeValue();
    }
    else{
        setNewItem();
    }
    show();
    clear();
}
function setNewItem(){
    var product =
    {
        name: inputs[0].value,
        price: inputs[1].value,
        description: inputs[2].value
    }
    products[updateIndex] = product;
    localStorage.setItem("productList", JSON.stringify(products));
    vipbtn.innerHTML = "Add";
}
function takeValue(){
    var product =
    {
        name: productName.value,
        price: productPrice.value,
        description: productDescription.value,
    }
    products.push(product);
    localStorage.setItem("productsList", JSON.stringify(products));
}
function show(){
    var cartona = "";
    for(var i = 0; i<products.length;++i){
        cartona +=`<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].description}</td>
        <td><button  onclick="deleteProduct(${i})" class = "btn btn-danger">Delete</button></td>
        <td><button  onclick="updateProduct(${i})" class = "btn btn-warning">Update</button></td>
        </tr>`;
    }
    document.getElementById("table_body").innerHTML = cartona;
}
function clear(){
    for(var i=0; i<inputs.length; ++i){
        inputs[i].value = "";
    }
}
function deleteProduct(index){
    products.splice(index, 1);
    show();
    localStorage.setItem("productsList", JSON.stringify(products));
}
function updateProduct(inedx){
    updateIndex = inedx;
    // var product = products[inedx];
    inputs[0].value = products[inedx].name;
    inputs[1].value = products[inedx].price;
    inputs[2].value = products[inedx].description;
    vipbtn.innerHTML = "Update";
}
searchBar.onkeyup = function search(){///////////////////////////////Q ==> A
    var cartona = "";
    for(var i = 0; i<products.length;++i){
        if(products[i].name.toLowerCase().includes(searchBar.value.toLowerCase()))
        cartona +=`<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].description}</td>
        <td><button  onclick="deleteProduct(${i})" class = "btn btn-danger">delete</button></td>
        <td><button  onclick="updateProduct(${i})" class = "btn btn-warning">Update</button></td>
        </tr>`;
    }
    document.getElementById("table_body").innerHTML = cartona;
}



