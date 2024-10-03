/* VARIABLES */

/* Array galeria de imagenes */
const arrFotosViajes = [
    { 
        src: 'assets/fotos-viajes/viaje-1.jpg', 
        alt: 'Alt 1', 
        title: 'Title 1', 
        descripcion: 'Titulo del viaje 1',
        tags: ['mar', 'edificio'] 
    },
    { 
        src: 'assets/fotos-viajes/viaje-2.jpg', 
        alt: 'Alt 2', 
        title: 'Title 2', 
        descripcion: 'Titulo del viaje 2',
        tags: ['arena', 'señales'] 
    },
    { 
        src: 'assets/fotos-viajes/viaje-3.jpg', 
        alt: 'Alt 3', 
        title: 'Title 3', 
        descripcion: 'Titulo del viaje 3',
        tags: ['señales'] 
    },
    { 
        src: 'assets/fotos-viajes/viaje-4.jpg', 
        alt: 'Alt 4', 
        title: 'Title 4', 
        descripcion: 'Titulo del viaje 4',
        tags: ['edificio', 'arena'] 
    },
    { 
        src: 'assets/fotos-viajes/viaje-5.jpg', 
        alt: 'Alt 5', 
        title: 'Title 5', 
        descripcion: 'Titulo del viaje 5',
        tags: ['mar', 'señales'] 
    },
    { 
        src: 'assets/fotos-viajes/viaje-6.jpg', 
        alt: 'Alt 6', 
        title: 'Title 6', 
        descripcion: 'Titulo del viaje 6',
        tags: ['arena'] 
    },
    { 
        src: 'assets/fotos-viajes/viaje-7.jpg', 
        alt: 'Alt 7', 
        title: 'Title 7', 
        descripcion: 'Titulo del viaje 7',
        tags: ['mar', 'señales'] 
    }
];

// Elemento padre de los botones
const botonesContainer = document.querySelector(".botones-container");

/* EVENTOS */

// Evento de click en el contenedor de los botones
botonesContainer.addEventListener("click", (event) => {
    // Verifica si el elemento clickeado es un boton
    if (event.target.tagName === "BUTTON") {
        // Obtenemos el texto del boton clickeado
        const textoTag = event.target.innerText;
        // console.log(`Boton clickeado: ${textoBoton}`);
        // console.log(cuantosTags(textoBoton));
        const cantidad = cuantosTags(textoTag).length;
        // Actualizar el texto de resultado
        const resultado = document.querySelector("#resultado-filtro");
        resultado.innerHTML = `Se han encontrado <strong>${cantidad}</strong> imágenes con el tag <strong>${textoTag}</strong>`

        // Pintar las imagenes
        pintarFotosFiltradas(textoTag);
    }
});

/* FUNCIONES */

/* Funcion para devolver el array con las imagens filtradas que contenga el parametro tag*/
const filtrarImagenPorTag = (tag) => {
    return arrFotosViajes.filter((item) => item.tags.includes(tag)); 
};

const pintarFotosFiltradas = (tag) => {
    // Creamos un fragmento
    const fragmento = document.createDocumentFragment();

    // Obtenemos el contenedor donde iran los botones
    const imagenPrincipal = document.querySelector(".imagen-pricipal");
    const imagenesRestantes = document.querySelector(".imagen-relacionadas");
    
    imagenPrincipal.innerHTML = '';
    imagenesRestantes.innerHTML = '';

    filtrarImagenPorTag(tag).forEach((item, index) => {
        // Crear elemento FIGURE IMG FIGCAPTION
        const caja = document.createElement("FIGURE");
        const imagen = document.createElement("IMG");
        const titulo = document.createElement("FIGCAPTION");

        // Añadimos los atributos a las imagenes
        imagen.src = item.src;
        imagen.alt = item.alt;
        imagen.title = item.title;
        // Añadimos el texto al titulo
        titulo.textContent = item.descripcion;

        // Añadimos el titulo y la imagen a la caja
        caja.append(titulo, imagen);

        // Añadimos al fragmento cuando no sea el indice 0
        index === 0 ? imagenPrincipal.append(caja) : fragmento.append(caja);
        
    });

    imagenesRestantes.append(fragmento);

};

/* Funcion para obtener los tags del array arrFotosViajes */
const obtenerTodosLosTags = () => {
    // .map() para obtener un array de arrays de tags
    // Aplanamos el array todosLosTags ya que esta en depth 2 (profundidad 2)
    return arrFotosViajes.map((item) => item.tags).flat(); 
    //console.log(todosLosTags);
};

/* Funcion para ver cuantas imagenes con el mismo tag hay */
const cuantosTags = (tag) => {
    return obtenerTodosLosTags().filter((item) => item === tag);
};

/* Funcion para devolver un array con los tags unicos*/
const obtenerTagsUnicos = () => {

    const todosLosTags = obtenerTodosLosTags();

    // Filtramos el array todosLosTags para guardar solo los valores unicos
    const tagsUnicos = todosLosTags.filter((item, index) => 
        // Comparamos el primer indice de item, con el indice actual
        todosLosTags.indexOf(item) === index
    );
    //console.log(tagsUnicos);
    return tagsUnicos;
};

/* Funcoin para crear y añadir botones al contenedor .botones-container */
const pintarBotones = () => {

    // Creamos un fragmento
    const fragmento = document.createDocumentFragment();

    // Obtenemos el contenedor donde iran los botones
    const botonesContainer = document.querySelector(".botones-container");

    obtenerTagsUnicos().forEach((item) => {
        // Crear elemento button
        const boton = document.createElement("button");
        // Añadimos el tipo de boton
        boton.type = "button";
        // Añadir texto al boton
        boton.innerText = `${item}`;
        // Añadimos al fragmento
        fragmento.append(boton);
    });

    botonesContainer.append(fragmento);
};

/* INVOCACIOENS */
pintarBotones();