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
        tags: ['mar', 'señales'] 
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
        tags: ['mar', 'edificio', 'señales'] 
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
        tags: ['mar', 'edificio', 'arena', 'señales'] 
    }
];
 
/* EVENTOS */

/* FUNCIONES */

/* Funcion para obtener los tags del array arrFotosViajes, se 
devuelve un array con los valores unicos*/
const obtenerTagsUnicos = () => {
    // .map() para obtener un array de arrays de tags
    // Aplanamos el array todosLosTags ya que esta en depth 2 (profundidad 2)
    const todosLosTags = arrFotosViajes.map((item) => item.tags).flat(); 
    //console.log(todosLosTags);

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