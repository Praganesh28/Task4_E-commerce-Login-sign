var cart_products = JSON.parse(localStorage.getItem("OnlineShopping")) || [];

var table_div = document.getElementById("table_div");
var total_price = 0;
if(cart_products.length > 0){
cart_products.forEach(element => {
    total_price += element['price']*element['quantity'];
    table_div.innerHTML += `
        <tr>
            <td><image src = "${element['image_url']}" height="100px" width="100px" /></td>
            <td>${element['name']}</td>
            <td>$${element['price']}</td>
            <td>  ${element['quantity']}  </td>
            <td><input type="button" onclick="deleteProduct('${element['name']}')" value="Delete Product"/></td>
        <tr>
    `;
});
}
else{
    table_div.innerHTML += "<h2>No Products added to cart</h2>"
}

document.getElementById("total_price").innerHTML = `Total Price : $${total_price}`;

function deleteProduct(name) {
    cart_products = cart_products.filter((product)=> product['name']!=name);
    localStorage.setItem('OnlineShopping', JSON.stringify(cart_products));
    window.location.reload();
}



