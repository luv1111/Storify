let addToCart = document.querySelectorAll('.add-to-cart')

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let Store1 = btn.dataset.Store1
        console.log(Store1)


    })

})
