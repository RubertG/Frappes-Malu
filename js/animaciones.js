// funciones
const cargarProductos = (place, lista) => {
    place.textContent = ''

    // agregamos cada atributo de las card
    lista.forEach(f => {
        const clone = templateCard.content.cloneNode(true)
        clone.querySelector('.card-img img').src = f.img
        clone.querySelector('.card-body h2').textContent = f.nombre
        clone.querySelector('.card-body span').textContent = f.precio
        clone.querySelector('.card-img img').alt = f.descripcion
        fragment.appendChild(clone)
    });

    place.appendChild(fragment)
}

const abrirMenu = () => {
    navbar.classList.toggle('navbar-open')
    document.querySelector('.navbar-icon .bi-list').style.display = 'none'
    document.querySelector('.navbar-icon .bi-x-lg').style.display = 'block'
    return
}

const cerrarMenu = () => {
    navbar.classList.toggle('navbar-open')
    document.querySelector('.navbar-icon .bi-list').style.display = 'block'
    document.querySelector('.navbar-icon .bi-x-lg').style.display = 'none'
    return
}

const botonesMenu = document.querySelectorAll('.navbar-icon i')
const navbar = document.querySelector('.navbar')
const cards = document.querySelector('.cards')

// animaciones con click
document.addEventListener("click", (e) => {

    if (e.target.matches('.navbar-icon .bi-list')) {
        abrirMenu()
    }

    if (e.target.matches('.navbar-icon .bi-x-lg')) {
        cerrarMenu()
    }

    if (e.target.matches('.navbar-nav-list a')) {
        cerrarMenu()
    }
})

// agregar los objetos con el template
const templateCard = document.querySelector('#template-card')
const fragment = new DocumentFragment()
const frappes = [{ nombre: 'Frappe de milo', precio: '4500', img: 'img/frappe-milo.webp', descripcion: "Frappé de milo - Frappe's Malu" },
    { nombre: 'Frappe de café', precio: '4500', img: 'img/frappe-cafe.webp', descripcion: "Frappé de café - Frappe's Malu" },
    { nombre: 'Frappe de oreo', precio: '8000', img: 'img/frappe-1.jpg', descripcion: "Frappé de oreo - Frappe's Malu" }]

cargarProductos(cards, frappes)

const objAnimados = document.querySelectorAll('.ocultar')

// animacion cuando el objeto entre en la pantalla
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop
    objAnimados.forEach((obj) => {
        if (obj.classList[0] === 'ubicacion-direccion') {
            if (obj.offsetTop - (window.innerHeight * 0.95) < scrollTop) {
                obj.classList.add('animacion-vista')
            }
        } else if (obj.offsetTop - (window.innerHeight * 0.6) < scrollTop) {
            obj.classList.add('animacion-vista')
        }
    })

    const sobreNostros = document.querySelector('#sobreNosotros')
    if (scrollTop > sobreNostros.offsetTop - (window.innerHeight)) {
        document.querySelector('.icon-up').classList.add('up-mostrar')
    } else {
        document.querySelector('.icon-up').classList.remove('up-mostrar')
    }
})

