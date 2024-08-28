
Swal.fire({
  title: "¡Descuentos!",
  text: "Hasta 3 cuotas sin interés y 15% con transferencia!",
  imageUrl: "../assets/argentinacampeona.avif",
  imageWidth: 390,
  imageHeight: 200,
  imageAlt: ""
});

const productos = [
  {
      "id": "camisetas-01",
      "titulo": "Remera Campeón 2024",
      "imagen": "./assets/camisetas/remeracampeonescopaamerica.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 49999
  },
  {
      "id": "camisetas-02",
      "titulo": "Camiseta Titular 24",
      "imagen": "./assets/camisetas/camisetatitularcopaamerica.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 99999
  },
  {
      "id": "camisetas-03",
      "titulo": "Camiseta Titular 24 Messi",
      "imagen": "./assets/camisetas/camisetatitularcopaamericamessi.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 109999
  },
  {
      "id": "camisetas-04",
      "titulo": "Camiseta Alternativa 24",
      "imagen": "./assets/camisetas/camisetasuplentecopaamerica.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 99999
  },
  {
      "id": "camisetas-05",
      "titulo": "Camiseta Arquero 24",
      "imagen": "./assets/camisetas/camisetaarquerocopaamerica.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 99999
  },
  {
      "id": "camisetas-06",
      "titulo": "Camiseta Prepartido 24",
      "imagen": "./assets/camisetas/camisetaprepartidocopaamerica.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 69999
  },
  {
      "id": "pantalones-01",
      "titulo": "Short Titular Blanco 24",
      "imagen": "./assets/pantalones/shortblancocopaamerica.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 59999
  },
  {
      "id": "pantalones-02",
      "titulo": "Short Titular Negro 24",
      "imagen": "./assets/pantalones/shortnegrocopaamerica.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 59999
  },
  {
      "id": "pantalones-03",
      "titulo": "Short Alternativo 24",
      "imagen": "./assets/pantalones/shortazulcopaamerica.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 59999
  },
  {
      "id": "camisetas-07",
      "titulo": "Remera ADN 24",
      "imagen": "./assets/camisetas/remeraadntrestiras.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 49999
  },
  {
      "id": "pantalones-04",
      "titulo": "Pantalón Deportivo ADN 24",
      "imagen": "./assets/pantalones/pantalondeportivoadn.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 89999
  },
  {
      "id": "abrigo-01",
      "titulo": "Campera ADN 24",
      "imagen": "./assets/abrigos/camperacapuchaadn.avif",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 124999
  },
  {
      "id": "camisetas-08",
      "titulo": "Remera Estampada 24",
      "imagen": "./assets/camisetas/remeraestampada.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 49999
  },
  {
      "id": "abrigo-02",
      "titulo": "Campera Rompeviento ADN 24",
      "imagen": "./assets/abrigos/rompevientoadn.avif",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 129999
  },
  {
      "id": "camisetas-09",
      "titulo": "Chomba 3 Tiras ADN 24",
      "imagen": "./assets/camisetas/chombatrestirasadn.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 65999
  },
  {
      "id": "abrigo-03",
      "titulo": "Buzo con Cuello Redondo",
      "imagen": "./assets/abrigos/buzocuelloredondo.avif",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 109999
  },
  {
      "id": "abrigo-04",
      "titulo": "Campera Deportiva ADN",
      "imagen": "./assets/abrigos/camperadeportivaadn.avif",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 129999
  },
  {
      "id": "pantalones-05",
      "titulo": "Short Alternativo 1994",
      "imagen": "./assets/pantalones/short1994.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 84999
  },
  {
      "id": "pantalones-06",
      "titulo": "Pantalón de Entrenamiento Tiro 24",
      "imagen": "./assets/pantalones/pantalonentrenamientotiro.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 119999
  },
  {
      "id": "abrigo-05",
      "titulo": "Campera Tiro 24 All-Weather",
      "imagen": "./assets/abrigos/rompevientoallweather.avif",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 159999
  },
  {
      "id": "pantalones-07",
      "titulo": "Pantalón Presentación 24",
      "imagen": "./assets/pantalones/pantalonpresentacion.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 119999
  },
  {
      "id": "abrigo-06",
      "titulo": "Campera Presentación 24",
      "imagen": "./assets/abrigos/camperapresentacion.avif",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 129999
  },
  {
      "id": "pantalones-08",
      "titulo": "Short Descanso 24",
      "imagen": "./assets/pantalones/shortdescanso24.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 79999
  },
  {
      "id": "pantalones-09",
      "titulo": "Short Arquero 24",
      "imagen": "./assets/pantalones/shortarquero.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 59999
  },
  {
      "id": "camisetas-10",
      "titulo": "Camiseta de Entrenamiento Tiro 24 Competition",
      "imagen": "./assets/camisetas/camisetaentrenamientocompetition.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 65999
  },
  {
      "id": "camisetas-11",
      "titulo": "Remera Negra 24",
      "imagen": "./assets/camisetas/remeranegra.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 55999
  },
  {
      "id": "abrigo-07",
      "titulo": "Campera Tiro 24 All-Weather Negro",
      "imagen": "./assets/abrigos/rompevientoallweathernegra.avif",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 159999
  },
  {
      "id": "pantalones-10",
      "titulo": "Short de Entrenamiento Tiro 24",
      "imagen": "./assets/pantalones/shortentrenamientotiro.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 69999
  },
  {
      "id": "camisetas-12",
      "titulo": "Camiseta de Entrenamiento Tiro 24 Competition Negra",
      "imagen": "./assets/camisetas/camisetaentrenamientocompetitionnegra.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 65999
  },
  {
      "id": "abrigo-08",
      "titulo": "Conjunto Tiro 24",
      "imagen": "./assets/abrigos/conjuntotiro.avif",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 189999
  },
  {
      "id": "camisetas-13",
      "titulo": "Remera 24",
      "imagen": "./assets/camisetas/remera.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 55999
  },
  {
      "id": "pantalones-11",
      "titulo": "Pantalón Deportivo 1994",
      "imagen": "./assets/pantalones/pantalon1994.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 129999
  },
  {
      "id": "abrigo-09",
      "titulo": "Buzo de Entrenamiento Tiro 24 Competition",
      "imagen": "./assets/abrigos/buzoentrenamiento.avif",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 119999
  },
  {
      "id": "abrigo-10",
      "titulo": "Campera Anthem ",
      "imagen": "./assets/abrigos/camperaanthem.avif",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 169999
  },
  {
      "id": "pantalones-12",
      "titulo": "Short Tiro Pro 24",
      "imagen": "./assets/pantalones/shorttiropro.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 89999
  },
  {
      "id": "camisetas-14",
      "titulo": "Camiseta Alternativa 1994 Maradona",
      "imagen": "./assets/camisetas/camisetadiego.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 149999
  },
  {
      "id": "pantalones-13",
      "titulo": "Short Descanso 23",
      "imagen": "./assets/pantalones/shortdescanso23.avif",
      "categoria": {
          "nombre": "Pantalones",
          "id": "pantalones"
      },
      "precio": 32199
  },
  {
      "id": "camisetas-15",
      "titulo": "Remera Campeón Mundial 2022",
      "imagen": "./assets/camisetas/remeracampeonqatar.avif",
      "categoria": {
          "nombre": "Camisetas",
          "id": "camisetas"
      },
      "precio": 32199
  }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");


function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar id="${producto.id}">Agregar</button>
      </div>
    `;

    contenedorProductos.append(div);
  })

  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
    
    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;
      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }

  })
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    console.log(productosEnCarrito);
    

}