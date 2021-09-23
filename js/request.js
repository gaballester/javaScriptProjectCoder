const cart = new Cart() 
// cart div node
const nCartDiv              = document.getElementById('cartDiv')
// cart table node
const nTableBody            = document.querySelector('#cartProductsTable tbody') 
// main products cards node
const nSectionProductsList  = document.getElementById('sectionProductsList') 
// button emptyCart node
const emptyCartBtn          = document.getElementById('emptyCart') 
// button Paid Order
const processRequestBtn     = document.getElementById('salesProcess') 
// new Products node
const nNewArrivalsMenu  = document.getElementById('newMenu')
// popular Products node
const nPopularProductsMenu  = document.getElementById('newMenu')
// all Products node
const nAllProductsMenu      = document.getElementById('newMenu')

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

    // nNewArrivalsMenu.addEventListener("click",(event) => {
    //     filterProducts('new')
    // })

    // nPopularProductsMenu.addEventListener("click",(event) => {
    //     filterProducts('popular')
    // })

    // nAllProductsMenu.addEventListener("click",(event) => {
    //     filterProducts('all')
    // })

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', cart.readLocalStorage())     
}