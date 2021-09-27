// Defino objeto de productos
class Product {
    constructor(productCode, productBranch, productName, productDetail1, productDetail2, productDetail3, productDetail4, productDetail5, productPrice, productStock, productBest, productNew) {
        this.productCode = productCode,
            this.productBranch = productBranch,
            this.productName = productName,
            this.productDetail1 = productDetail1,
            this.productDetail2 = productDetail2,
            this.productDetail3 = productDetail3,
            this.productDetail4 = productDetail4,
            this.productDetail5 = productDetail5,
            this.productPrice = productPrice,
            this.productStock = productStock,
            this.productBest = productBest,
            this.productNew = productNew
    }
}

var allProducts = []
var filteredProducts = []

// uso fetch para leer archivo json local
fetch('/json/products.json', {
    method: 'GET'
})
    .then(response => response.json())
    .then(arrProducts => {
        allProducts = arrProducts.slice(0, arrProducts.length)
        filteredProducts = [...allProducts]
        DisplayHTMLProducts(arrProducts)
    })


function DisplayHTMLProducts(arrProducts) {

    let mostrar = ""
    let starts = ""
    let newProd = ""


    // uso forEach para actualizar el DOM
    arrProducts.forEach(product => {
        starts = ''
        for (let i = 0; i < 5; i++) {
            if (i < product.starts) {
                starts += `<div class="bi-star-fill"></div>`
            } else {
                starts += `<div class="bi-star"></div>`
            }
        }
        if (product.productNew) {
            newProd = `<img src="./img/images.png" alt="New Product">`
        } else {
            newProd = ''
        }

        mostrar += `<div class= "col mb-5" >
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
            SALE
        </div>
        <!-- Product image-->
        <img class="card-img-top" src="./img/${product.productCode}.jpg"
            alt="${product.productName}" />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${product.productName}</h5>
                <hr>
                <!-- Product details-->
                    <ul class="p-0" >
                        <li>${product.productDetail1}</li>
                        <li>${product.productDetail2}</li>
                    </ul>
                    <ul class="moreDetails"
                        <li>${product.productDetail3}</li>
                        <li>${product.productDetail4}</li>   
                        <li>${product.productDetail5}</li>     
                    </ul>
                <!-- Product reviews-->
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        ${starts}
                    </div>
                <!-- Product price-->
                <h5>U$S<span>${product.productPrice}</span></h5>
                ${newProd}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto addToCart" data-id="${product.productCode}" href="#">Add to
                cart</a></div>
            </div>
        </div>
    </div >   
    `
    }

    )
    // mostrar productos dinámicamente en página principal
    let contenedor = document.getElementById("sectionProductsList")
    contenedor.innerHTML = mostrar
}

function filterProducts(param) {
    switch (param) {
        case 'new':
            filteredProducts = allProducts.filter(product => product.productNew === true)
            break
        case 'all':
            filteredProducts = allProducts
            break
        case 'popular':
            filteredProducts = allProducts.filter(product => product.productBest === true)
            break
    }
    DisplayHTMLProducts(filteredProducts)
    console.log(filteredProducts)
}


$(document).ready(function () {

    $('#allDetailCheck').prop('checked', true)

    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            $(".moreDetails").show()
        }
        else if ($(this).prop("checked") == false) {
            $(".moreDetails").hide()
        }
    });

    let titulo = $('.fw-bolder')

    $(".title1").hide()
    $(".title2").hide()
    $(".title1").slideDown(2000, function () {
        $(".title2").fadeIn(3000, function () {
            $(".title2").animate({
                marginLeft: '300px'
            }, 2000)
                .animate({
                    marginLeft: '-600px'
                }, 2000)
                .animate({
                    marginLeft: '0px'
                }, 2000)
        })
    })

})

function sortProducts(sortType) {
    console.log(filteredProducts)
    var arrProductsSorted = [...filteredProducts]

    switch (sortType) {
        case 'relevants':
            
            arrProductsSorted.sort((a, b) => {
                if (a.productBest < b.productBest) {
                    return 1
                }
                if (a.productBest > b.productBest) {
                    return -1
                }
                return 0
            })
            break
        case 'lower':
            arrProductsSorted.sort( (a, b) => {
                if(a.productPrice == b.productPrice) {
                  return 0
                }
                if(a.productPrice < b.productPrice) {
                  return -1
                }
                return 1
              });
            break
        case 'higher':
            arrProductsSorted.sort( (a, b) => {
                if(a.productPrice == b.productPrice) {
                  return 0
                }
                if(a.productPrice > b.productPrice) {
                  return -1
                }
                return 1
              });
            break
        breack
    }
    DisplayHTMLProducts(arrProductsSorted)
}


function paid() {

    // information to send
    const elemento = {
        "items": [
            {
                "title": "Dummy Title",
                "description": "Dummy description",
                "picture_url": "http://www.myapp.com/myimage.jpg",
                "category_id": "cat123",
                "quantity": 1,
                "currency_id": "ARS",
                "unit_price": 10
            }
        ]
    }


    fetch("https://api.mercadopago.com/checkout/preferences", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Authorization': ' Bearer TEST-6222537316144723-092602-33b5268ef0daeaafdba14d18e2bf82d2-20746333',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(elemento)
    });

}