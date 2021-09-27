function paid() {

    $.get("/datos.json", (resultado, status) => {
        console.log(resultado);
    })

    const  productsLS = cart.obtainProductsLocalStorage()

    const checkouProducts = productsLS.map((product) => {
        return {
            title: product.title,
            picture_url: product.image,
            quantity: parseFloat(product.qty),
            currency_id: "ARS",
            unit_price: parseFloat(product.price),
        };
    });

    console.log(checkouProducts)
    const elemento = { items: checkouProducts };

    $.ajaxSetup({
        headers: {
            Authorization:
                " Bearer TEST-6222537316144723-092602-33b5268ef0daeaafdba14d18e2bf82d2-20746333",
            "Content-Type": "application/json",
        },
    });

    $.post(
        "https://api.mercadopago.com/checkout/preferences",
        JSON.stringify(elemento),
        (respuesta, status) => {
            if (status == "success") {
                window.open(respuesta.init_point);
            }
        }
    );
}
