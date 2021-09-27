class Cart {

    // read and show products stored in the LS
    readLocalStorage() {
        let productsLS
        productsLS = this.obtainProductsLocalStorage()

        productsLS.forEach(function (product) {
            // build template
                  const row = document.createElement('tr')
            row.innerHTML = `
                    <td>
                        <img src="${product.image}" width=100>
                    </td>
                    <td>${product.title}</td>      
                    <input class="inputQty" type="number" size="2" min="1" max="10" name="qty" data-id="${product.id}" name="qty" value=${product.qty}>
                    <td>${product.price}</td>
                    <td>
                        <a href="#" class="deleteCartProduct fas fa-times-circle" data-id="${product.id}" name="deleteRow"></a>
                    </td>
                `
            nTableBody.appendChild(row)
        }
        )
        document.getElementById("CartCount").innerHTML = productsLS.length
        this.showTotalAmount()
    }
   
    // delete product
    deleteCartProduct(e) {
        e.preventDefault()
        const cartQty = parseInt(document.getElementById("CartCount").textContent)
        let product,
            productId
        if (e.target.classList.contains('deleteCartProduct')) {
            product = e.target.parentElement.parentElement
            console.log(product)
            productId = product.querySelector('a').getAttribute('data-id')
            e.target.parentElement.parentElement.remove()
            document.getElementById("CartCount").innerHTML = cartQty - 1
            // lo tuve que ocmentar porque no funciona da error de funcion no definida
            deleteProductLS(productId)
            this.showTotalAmount()
        }    
    }

    // Obtain products in LS
    obtainProductsLocalStorage() {
        let productLS
        // verifiy if exists products in LS
        if (localStorage.getItem('products') === null) {
            productLS = []
        }
        else {
            productLS = JSON.parse(localStorage.getItem('products'))
        }
        return productLS
    }

    // Update product Qty in LS 
    updateLSProductQty(id,value) {
        const productsLS = this.obtainProductsLocalStorage()
        productsLS.forEach(function (product) {
            if ( product.id === id ) {
                product.qty = value
                localStorage.setItem('products', JSON.stringify(productsLS))
            }
        })
        this.showTotalAmount()
    }

    // add product to cart
    addProductToCart(e) {
        e.preventDefault()
        if (e.target.classList.contains('addToCart')) {
            const product = e.target.parentElement.parentElement.parentElement
            //Enviamos el producto seleccionado para tomar sus datos
            this.obtainProductData(product)
        }
        this.showTotalAmount()
    }

    // read product data
    obtainProductData(product) {
        const productInfo = {
            image: product.querySelector('img').src,
            title: product.querySelector('h5').textContent,
            price: product.querySelector('h5 span').textContent,
            id: product.querySelector('a').getAttribute('data-id'),
            qty: 1
        }

        let productsLS
        productsLS = this.obtainProductsLocalStorage()
        productsLS.forEach(function (productLS) {
            if (productLS.id === productInfo.id) {
                productsLS = productLS.id
            }
        })

        if (productsLS != productInfo.id) {
            this.AddCart(productInfo)
        }
    }

    // add product to Cart
    AddCart(product) {
        const cartQty = parseInt(document.getElementById("CartCount").textContent)
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>
        <img src="${product.image}" width=100>
        </td>
        <td>${product.title}</td>      
        <input class="inputQty" type="number" size="2" min="1" max="10" data-id="${product.id}" name="qty" value=1>
        <td>${product.price}</td>
        <td>
            <a href="#" class="deleteCartProduct fas fa-times-circle" data-id="${product.id}" name="deleteRow"></a>
        </td>
            `
        nTableBody.appendChild(row)
        document.getElementById("CartCount").innerHTML = cartQty + 1
        this.saveProductsLocalStorage(product)
        this.showTotalAmount()
    }

    // delete all products in Cart
    emptyCart(e) {
        e.preventDefault()
        while (nTableBody.firstChild) {
            nTableBody.removeChild(nTableBody.firstChild)
        }
        // clear LS
        this.emptyLocalStorage()
        document.getElementById("CartCount").innerHTML = 0
        document.getElementById("totalCart").innerHTML = 0
        return false
    }

    // save products in Local Storage
    saveProductsLocalStorage(product) {
        let products
        products = this.obtainProductsLocalStorage()
        // add product to Cart
        products.push(product)
        // add product to LS
        localStorage.setItem('products', JSON.stringify(products))
    }


    // delete all data in the LS
    emptyLocalStorage() {
        localStorage.clear()
    }

    calcTotalAmount() {

        let productLS = cart.obtainProductsLocalStorage()
        let totalAmount = 0;
    
        productLS.forEach(function(product,index){
            totalAmount = totalAmount + product.price * product.qty
     
        })
        return totalAmount
    }

    showTotalAmount() {
        const totalAmount = this.calcTotalAmount()
        document.getElementById("totalCart").innerHTML = totalAmount
    }
}


function deleteProductLS(productId) {
    let productLS = cart.obtainProductsLocalStorage()

    productLS.forEach(function(product,index){
        if(product.id === productId){
            productLS.splice(index,1)
        }
    })
    localStorage.setItem('products',JSON.stringify(productLS))
}

function updateProductLS(productId) {
    let productLS = cart.obtainProductsLocalStorage()

    productLS.forEach(function(product,index){
        if(product.id === productId){
            productLS.splice(index,1)
        }
    })
    localStorage.setItem('products',JSON.stringify(productLS))
}

