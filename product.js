var products = [
    {
        image_url: "images/formalcode.webp",
        name: "Formal Shoe ",
        price: 4900
    },
    {
        image_url: "images/highheels.jpg",
        name: "High Heels",
        price: 2500
    },
    {
        image_url: "images/sandals.jpg",
        name: "Sandals",
        price: 1700
    },
    {
        image_url: "images/loaffer.webp",
        name: "Loafer",
        price: 1599
    },
];



var product_div_shoe = document.getElementById("product_div_shoe");
for(const element of products){
    product_div_shoe.innerHTML += `<div class="col-lg-4 col-md-4 col-12 py-5 ">
    <div class="card">
        <img src="${element['image_url']}" class="card-img-top" width="100px" height="250" alt="loading...">
        <div class="card-body">
            <h5 class="card-title">${element['name']} </h5>
            <p class="price">$${element['price']} </p>
            <div class="d-grid gap-2 d-md-flex justify-content-center">
                <a href="#" class="btn btn-danger" onclick="addToCart('${element['image_url']}','${element['name']}','${element['price']}')">Add TO Cart</a>
                
            </div>
        </div>
    </div>
</div>`;
}


// var productsports = [
//     {
//         image_url: "images/nikeshoe.webp",
//         name: "Nike Air",
//         price: 3599
//     },
//     {
//         image_url: "images/footballboot.jpg",
//         name: "Football Boot ",
//         price: 2999
//     },
//     {
//         image_url: "images/footballboot.jpg",
//         name: " ",
//         price: 1999
//     },
//     {
//         image_url: "images/footballboot.jpg",
//         name: " ",
//         price: 1599
//     },
   
// ];
// var product_sportshoe = document.getElementById("product_sportshoe");
// for(const element of productsports){
//     product_sportshoe.innerHTML += `<div class="col-lg-4 col-md-4 col-12 py-5 ">
//     <div class="card">
//         <img src="${element['image_url']}" class="card-img-top" width="100px" height="250" alt="loading...">
//         <div class="card-body">
//             <h5 class="card-title">${element['name']} </h5>
//             <p class="price">$${element['price']} </p>
//             <div class="d-grid gap-2 d-md-flex justify-content-center">
//                 <a href="#" class="btn btn-danger" onclick="addToCart('${element['image_url']}','${element['name']}','${element['price']}')">Add TO Cart</a>
                
//             </div>
//         </div>
//     </div>
// </div>`;
// }


function addToCart(image_url, name, price){
    alert("Item is added to cart");
    let cart_products = JSON.parse(localStorage.getItem('OnlineShopping')) || [];
    let found = false;
    cart_products.map((product)=>{
        if(product['name'] == name){
            found = true;
            product['quantity'] ++;
        }
    });
    if(!found){
        cart_products.push({
            image_url: image_url,
            name: name,
            price: price,
            quantity: 1
        });
    }
    console.log(cart_products);
    localStorage.setItem('OnlineShopping', JSON.stringify(cart_products));
}