
const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce ((acumulador,producto) =>acumulador + producto.price,0);





const productos = [
    {
        id:1,
        title:"swter crema ",
        price:900 
    },
    {
        id:2,
        title:"swter tricolor",
        price:1200
    },
    {
        id:3,
        title:"swter nude",
        price:2800
    },
    {
        id:4,
        title:"swter nude",
        price:2560
    },
    {
        id:5,
        title:"swter nude",
        price:2400
    },
    {
        id:6,
        title:"swter nude",
        price:2300
    },
    {
        id:7,
        title:"swter nude",
        price:1300
    },
    {
        id:8,
        title:"swter nude",
        price:2900
    },
];
productos.forEach((producto) => {
    const idButton = `page-content${producto.id}`
    document.getElementById("product-container").innerHTML +=
`<div class="page-content">
<div class="product-container">
    <h3>${producto.title}</h3><img src="imagenes/prenda-1.jpg" alt="">
    <h2>${producto.price}</h2>
    <button class="button-add" id="${idButton}" data-id="${producto.id}">Agregar</button>
</div>`});

productos.forEach((producto) => {
    const idButton = `button-add${producto.id}`
    document.getElementById(idButton).addEventListener('click',() => {
        carrito.push(producto);
        localStorage.setItem("carrito",JSON.stringify(carrito));
        const total = carrito.reduce ((acumulador, producto) => acumulador+ producto.price, 0);    
    })
});

