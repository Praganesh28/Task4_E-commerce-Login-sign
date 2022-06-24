
var productsports = [
    {
        image_url: "images/nikeshoe.webp",
        name: "Nike Air",
        price: 3599
    },
    {
        image_url: "images/footballboot.jpg",
        name: "Football Boot ",
        price: 2999
    },
    {
        image_url: "images/hockey.avif",
        name: "Hockey Shoe",
        price: 2599
    },
    {
        image_url: "images/basketball.jpg",
        name: " Basketball Shoe",
        price: 4599
    },
   
];
var product_sportshoe = document.getElementById("product_sportshoe");
for(const element of productsports){
    product_sportshoe.innerHTML += `<div class="col-lg-4 col-md-4 col-12 py-5 ">
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


