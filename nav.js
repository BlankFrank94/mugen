const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <h1><a id="logo" href="./index.html">mugen</a></h1><div class="nav-items">
            <a href="#">decor</a>
            <a href="#">apparel</a>
            <a href="#">infinity.fm</a>
            <a href="#"><img src="img/cart.png" alt="shopping-cart"></a>
        </div>
    </div>
    `;
}

createNav();