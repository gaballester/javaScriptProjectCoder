const cart = new Cart() 
const nCartDiv = document.getElementById('cartDiv')
const nTableBody = document.querySelector('#cartProductsTable tbody') 
const nSectionProductsList  = document.getElementById('sectionProductsList') 
const emptyCartBtn = document.getElementById('emptyCart') 
const processRequestBtn = document.getElementById('salesProcess') 
const nNewArrivalsMenu = document.getElementById('newMenu')
const nPopularProductsMenu = document.getElementById('newMenu')
const nAllProductsMenu = document.getElementById('newMenu')

loadListenerEvents() 

function loadListenerEvents() {

    nSectionProductsList.addEventListener('click', (e)=>{cart.addProductToCart(e)}) 
    emptyCartBtn.addEventListener('click', (e)=>{cart.emptyCart(e)}) 

    nCartDiv.addEventListener("click", (event) => {

        const expr = event.target.getAttribute('name');
        switch (expr) {
          case 'qty':        
            cart.updateLSProductQty(
                    event.target.getAttribute('data-id'),
                    event.target.value
                    )            
            break;
          case 'deleteRow':
            cart.deleteCartProduct(event)
            break;
        }

      })

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', cart.readLocalStorage())     
}