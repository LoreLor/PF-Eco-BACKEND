const typesProducts = [
    {
        "name": "samsung galaxy s22 ultra",
        "img": "https://img.global.news.samsung.com/ar/wp-content/uploads/2022/02/Samsung_Galaxy-S22-Ultra_Green.jpg",
        "price": "ARS 219,000.00",
        "description": "Con la mejor cámara, rendimiento y conectividad en un smartphone Galaxy, el Galaxy S22 Ultra reinventa la experiencia móvil al fusionar las funciones favoritas de los fanáticos de las series Note y S.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },
    
    {
        "name": "Samsung Galaxy M23 5G",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/03/Samsung-Galaxy-M23-5G-13.jpeg",
        "price": "ARS 57,200.00",
        "description": "El Samsung Galaxy M23 5G es uno de los móviles de la firma coreana que presumen de características puntualmente destacadas, a pesar de estar catalogado como un teléfono de gama media.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },

    {
        "name": "Samsung Galaxy A53 5G",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/03/Samsung-Galaxy-A53-azul.jpg",
        "price": "ARS 79,640.00",
        "description": "Uno de los smartphones más importantes en el catálogo de Samsung es el Galaxy A53 5G, que nos ofrece un año más una gran oportunidad de tener tecnología de alto nivel, sin tener que pagar demasiado.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },

    {
        "name": "Samsung Galaxy A13",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/03/Samsung-Galaxy-A13-3.jpeg",
        "price": "ARS 44,220.00",
        "description": "Un smartphone de relación calidad precio que no pasa por alto ningún elemento. Todo ello unido al buen software, nos asegura tener teléfono móvil para varios años.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },

    {
        "name": "Samsung Galaxy S21 FE 5G",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/01/Samsung-Galaxy-S21-FE-1.jpg",
        "price": "ARS 182,380.00",
        "description": "Un dispositivo confiable que, lo que hace, lo hace muy bien. La firma de tecnología es una experta teniendo terminales bonitos y eficientes y esto es una clara muestra de ello.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },

    {
        "name": "Samsung Galaxy F41",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/06/Samsung-Galaxy-F41-7.jpg",
        "price": "ARS 44,000.00",
        "description": "El smartphone luce una pantalla SuperAMOLED, una triple cámara con sensor de 64 MP y una precio que hace temblar a la competencia.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },

    {
        "name": "Samsung Galaxy A22 5G",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/06/Samsung-Galaxy-A22-5G-1-2.jpg",
        "price": "ARS 219,000.00",
        "description": "Un modelo que tiene la ventaja de conectarse a las redes móviles de mayor velocidad sin tener que gastarnos todos nuestros ahorros.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },

    {
        "name": "Samsung Galaxy F52 5G",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/05/Samsung-Galaxy-F52-5G-1-1.jpg",
        "price": "ARS 55,000.00",
        "description": "La firma coreana sigue completando su catálogo de gama media con un modelo que, de momento, solo se podrá comprar en China.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },

    {
        "name": "Samsung Galaxy A72",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/03/Samsung-Galaxy-A72-19-1.jpg",
        "price": "ARS 165,000.00",
        "description": "El Samsung Galaxy A72 es el tercer móvil que la marca coreana lanzaba al mercado en marzo de 2021. Al igual que sus hermanos, los A52 y A52 5G, este teléfono de la firma asiática llega presumiendo de especificaciones de gama media, pero con un buen número de características más propias de teléfonos que duplican el precio de este modelo.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },

    {
        "name": "Samsung Galaxy A52",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/03/Samsung-Galaxy-A52-18-1.jpg",
        "price": "ARS 56,760.00",
        "description": "Estamos ante un smartphone que presume de grandes especificaciones como una cuádruple cámara trasera donde encontramos un OIS para estabilizar fotos y vídeos, además de una pantalla Super AMOLED.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },

    {
        "name": "Samsung Galaxy A32",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/04/Samsung-Galaxy-A32-4G-1.jpg",
        "price": "ARS 61,600.00",
        "description": "Con la mejor cámara, rendimiento y conectividad en un smartphone Galaxy, el Galaxy S22 Ultra reinventa la experiencia móvil al fusionar las funciones favoritas de los fanáticos de las series Note y S.",
        "rating": 0,
        "stock": 25,
        "categories": ["samsung"]
    },

    {
        "name": "iphone 13 pro max",
        "img": "https://surmenai.com.ar/img/Producto/2/836f975ee28e7f7f09119cba8e5f47cf-623a333e5f399.jpg",
        "price": "ARS 330,000.00",
        "description": "Un procesador más potente, una pantalla con tecnología ProMotion, una cámara capaz de grabar vídeo en modo retrato… Tanto el iPhone 13 Pro como el iPhone 13 Pro Max tienen todo lo necesario para convertirse en los mejores móviles del 2021.",
        "rating": 0,
        "stock": 25,
        "categories": ["apple"]
    },

    {
        "name": "iPhone SE",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/03/iPhone-SE-3-2022-2.jpg",
        "price": "ARS 127,380.00",
        "description": "En el catálogo de móviles de Apple no solo existe lo más top del momento, también nos encontramos con los iPhone SE. Smartphones que nos ofrecen grandes prestaciones en muchos apartados, pero más reducidas en otros casos. Con esta tercera generación, Apple no ha cambiado demasiado, pero sí que supone una renovación importante.",
        "rating": 0,
        "stock": 25,
        "categories": ["apple"]
    },

    {
        "name": "iPhone 13 mini",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/09/iPhone-13-8-1.jpg",
        "price": "ARS 163,000.00",
        "description": "Después del éxito que cosechó el modelo reducido de la generación anterior, no podía faltar el iPhone 13 mini. Un pequeño móvil que también se beneficia de un precio acorde a sus medidas.",
        "rating": 0,
        "stock": 25,
        "categories": ["apple"]
    },

    {
        "name": "iPhone 13",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/09/iPhone-13-2-1.jpg",
        "price": "ARS 184,000.00",
        "description": "Si estás buscando un móvil que prácticamente rinda como un ordenador potente, este modelo de gama alta es la opción ideal, pues no vamos a encontrar fallos o limitaciones con nada que queramos conseguir.",
        "rating": 0,
        "stock": 25,
        "categories": ["apple"]
    },

    {
        "name": "iPhone 12 Pro Max",
        "img": "https://http2.mlstatic.com/D_NQ_NP_874720-MLA46088620270_052021-O.jpg",
        "price": "ARS 254,000.00",
        "description": "Al igual que toda la gama de 2020, el smartphone monta un chipset A14 que dota al conjunto de conectividad con redes 5G, una pantalla Super Retina XDR y iOS 14 como encargado de controlar cada componente que repasamos en esta ficha técnica.",
        "rating": 0,
        "stock": 25,
        "categories": ["apple"]
    },

    {
        "name": "iPhone 12 Pro",
        "img": "https://www.macstation.com.ar/img/productos/small/2179-1.jpg",
        "price": "ARS 230,000.00",
        "description": "Otras características compartidas con sus hermanos de gama son el procesador A14 Bionic de Apple que, además de ser el primero fabricado en 5nm, añade conectividad 5G al conjunto. De igual manera el smartphone es de los primeros en llegar al mercado con iOS 14.",
        "rating": 0,
        "stock": 25,
        "categories": ["apple"]
    },

    {
        "name": "iPhone 12",
        "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000",
        "price": "ARS 220,000.00",
        "description": "Compartiendo el mismo procesador A14 Bionic de Apple presente en el resto de gama, encargado de dotar al móvil de compatibilidad 5G, el smartphone luce una pantalla OLED Super Retina XDR, una doble cámara trasera de 12 MP, iOS 14 como sistema operativo y se puede comprar en 5 tonos diferentes.",
        "rating": 0,
        "stock": 25,
        "categories": ["apple"]
    },

    {
        "name": "iPhone 12 mini",
        "img": "https://m.media-amazon.com/images/I/71uuDYxn3XL.jpg",
        "price": "ARS 162,000.00",
        "description": "El smartphone de Apple es muy similar al iPhone 12 pero cuenta con unas dimensiones más reducidas al mismo tiempo que la pantalla es diferente entre ambos dispositivos. Pero más allá de ello, este móvil compacto comparte procesador, batería y conectividad 5G.",
        "rating": 0,
        "stock": 25,
        "categories": ["apple"]
    },

    {
        "name": "iPhone 8 Plus",
        "img": "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-8-plus-space-gray.png",
        "price": "ARS 80,000.00",
        "description": "El iPhone 8 Plus se corresponde con la nueva generación de iPhone presentada en septiembre de 2017. Como tal, se posiciona en el catálogo del fabricante como el relevo del iPhone 7 Plus. Entre las novedades destaca una doble cámara mejorada, cubierta de la carcasa en cristal endurecido y carga rápida con carga inalámbrica.",
        "rating": 0,
        "stock": 25,
        "categories": ["apple"]
    },

    {
        "name": "iPhone X",
        "img": "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-x-space-gray.png",
        "price": "ARS 120,000.00",
        "description": "El nuevo iPhone X se corresponde con el smartphone de Apple más destacado de los presentados en septiembre de 2017. Se caracteriza por cambiar radicalmente de diseño, principalmente al adoptar una pantalla sin marcos y un display OLED. El modelo incluye de serie iOS 11, además de otras características tales como doble cámara trasera, reconocimiento facial 3D y carcasa resistente al agua.",
        "rating": 0,
        "stock": 25,
        "categories": ["apple"]
    },

    {
        "name": "motorola edge 20",
        "img": "https://mxmoto.vtexassets.com/arquivos/ids/165163/MotorolaEdge20-Blanco-Hero.png?v=637650950081900000",
        "price": "ARS 69,999.00",
        "description": "El nuevo motorola edge 20 te permite contar tu historia como nunca antes. Gracias a su avanzado sistema de cámaras con 108 MP, puedes tomar impresionantes fotos en ultraalta resolución y grabar videos en 4K.",
        "rating": 0,
        "stock": 25,
        "categories": ["motorola"]
    },

    {
        "name": "Motorola Edge 30 Pro",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/03/Moto-Edge-30-Pro-15.jpg",
        "price": "ARS 80,000.00",
        "description": "Para aquellos que quieren un móvil muy completo al que no le falta de nada y que puede dejarnos un sabor de boca estupendo en todas las situaciones, este Motorola Edge 30 Pro puede ser una gran opción. El terminal más potente y completo del fabricante, que no se rinde ante la feroz competencia en la gama alta.",
        "rating": 0,
        "stock": 25,
        "categories": ["motorola"]
    },

    {
        "name": "Motorola Moto G31",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/12/Moto-G31-2.jpg",
        "price": "ARS 55,000.00",
        "description": "El moto g31 equipa una increíble pantalla Full HD+ Max Vision de 6,4″ con más de 400 ppp para capturar detalles más nítidos y tecnología OLED para garantizar colores más realistas, algo muy complicado de encontrar en smartphones económicos. Su sistema de cámaras de 50 MP permite capturar tus recuerdos más preciados con un detalle increíble, y todo ello sabiendo que una sola carga permite disfrutar de 36 horas de autonomía.",
        "rating": 0,
        "stock": 25,
        "categories": ["motorola"]
    },

    {
        "name": "Motorola Moto G41",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/12/Moto-G41-4.jpg",
        "price": "ARS 69,999.00",
        "description": "El moto g41 es una versión menos potente que el resto de smartphones de la firma lanzados al mercado a finales de 2021. Destaca por una cámara donde encontramos un sensor principal de 48 MP con tecnología Quad Pixel, que permite capturar fotos con gran detalles de día, de noche y en cualquier momento.",
        "rating": 0,
        "stock": 25,
        "categories": ["motorola"]
    },

    {
        "name": "Moto G71 5G",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/12/Moto-G71-5G-10.jpg",
        "price": "ARS 75,999.00",
        "description": "A pesar de quedar englobado dentro de la gama media-alta, hemos podido comprobar que lo mejor de este teléfono es, sin duda, su deslumbrante pantalla OLED FHD+ de 6,4″. Con una gama de colores un 25% mayor, las imágenes resultan mucho más atractivas al ojo y, además, usar esta tecnología nos permite disfrutar de una mejor autonomía al implicar un menor consumo energético.",
        "rating": 0,
        "stock": 25,
        "categories": ["motorola"]
    },

    {
        "name": "Motorola Moto G200 5G",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/11/Moto-G200-10.jpg",
        "price": "ARS 99,999.00",
        "description": "El moto g200 5G llega a las tiendas arrasando, equipado con el sistema de cámara más avanzado en un teléfono moto g hasta la fecha, utilizando la misma cámara principal incluida en la familia motorola edge. Con una cámara de ultra alta resolución de 108 MP, que no solo incluye más detalles en cada toma, sino que también mejora la calidad del zoom digital.",
        "rating": 0,
        "stock": 25,
        "categories": ["motorola"]
    },

    {
        "name": "Moto E7i Power",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/11/Moto-E7i-Power-1.jpg",
        "price": "ARS 40,000.00",
        "description": "Motorola se ha convertido en una marca experta en comercializar móviles para presupuestos ajustados que, aunque no cuentan con grandes especificaciones, deberían funcionar sin problema en el día a día. El último ejemplo de ello es el Moto e7i Power que se planta en las tiendas españolas presumiendo de una batería de gran capacidad.",
        "rating": 0,
        "stock": 25,
        "categories": ["motorola"]
    },

    {
        "name": "motorola edge 20",
        "img": "https://mxmoto.vtexassets.com/arquivos/ids/165163/MotorolaEdge20-Blanco-Hero.png?v=637650950081900000",
        "price": "ARS 69,999.00",
        "description": "El nuevo motorola edge 20 te permite contar tu historia como nunca antes. Gracias a su avanzado sistema de cámaras con 108 MP, puedes tomar impresionantes fotos en ultraalta resolución y grabar videos en 4K.",
        "rating": 0,
        "stock": 25,
        "categories": ["motorola"]
    },

    {
        "name": "Motorola Moto E40",
        "img": "https://cdn.shopify.com/s/files/1/0566/3866/8939/products/e40-moto-gris_580x.png?v=1647461615",
        "price": "ARS 29,999.00",
        "description": "Este Moto e40 que repasamos en esta ficha técnica, llega a las tiendas para ampliar la familia e con características muy atractivas para el usuario y sobre todo u precio de derribo. La marca se ha especializado en lanzar al mercado smartphones muy baratos con alguna que otra peculiaridad y en el caso de este modelo lo más llamativo es, sin duda, su pantalla con alta tasa de refresco.",
        "rating": 0,
        "stock": 25,
        "categories": ["motorola"]
    },

    {
        "name": "Moto E20",
        "img": "https://mxmoto.vtexassets.com/arquivos/ids/165163/MotorolaEdge20-Blanco-Hero.png?v=637650950081900000",
        "price": "ARS 25,000.00",
        "description": "El moto E20 presentado en la segunda mitad de 2021 es un smartphone con características muy atractivas como su gran pantalla, su batería de gran duración, o su alto rendimiento. Por supuesto, eso sin dejar atrás el ‘mantra’ de la firma desde que el mundo es mundo, que llegue a un precio asequible para el usuario.",
        "rating": 0,
        "stock": 25,
        "categories": ["motorola"]
    },

    {
        "name": "xiaomi redmi note 10 pro",
        "img": "https://cdn-xiaomi.waugi.com.ar/702-home_default/xiaomi-redmi-note-10-pro-6gb128gb.jpg",
        "price": "ARS 85,099.00",
        "description": "De la Antártida al espacio, la serie Redmi Note está lista para conquistar el mundo. Nuestra actitud es desafiar y superar las expectativas una y otra vez.",
        "rating": 0,
        "stock": 25,
        "categories": ["xiaomi"]
    },

    {
        "name": "Xiaomi 12X",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/03/Xiaomi-12X-3.jpg",
        "price": "ARS 176,000.00",
        "description": "El Xiaomi 12X es el móvil que muchos estaban esperando como agua de mayo, porque se trata la opción compacta que tanto hemos deseado desde que las pantallas se comenzaron a hacer más y más grandes. Pero no es lo único que cambia con los demás Xiaomi 12, pues, aunque es un móvil de alta gama, no es el más puntero.",
        "rating": 0,
        "stock": 25,
        "categories": ["xiaomi"]
    },

    {
        "name": "Xiaomi 12 Pro",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/03/Xiaomi-12-Pro-12.jpg",
        "price": "ARS 220,000.00",
        "description": "Teníamos muchas ganas de echar el guante a lo mejor que tiene Xiaomi preparado para este 2022 y lo cierto es que la marca ha cumplido con las muchas expectativas que profesionales y usuarios teníamos puestas en la marca. Este smartphone es grande, bonito, y se aleja de una cierta moda imperante que apuesta por presentar teléfonos demasiado parecidos a los últimos terminales de Apple.",
        "rating": 0,
        "stock": 25,
        "categories": ["xiaomi"]
    },

    {
        "name": "Xiaomi Poco M4 Pro",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/03/POCO-M4-Pro_Trasera.jpg",
        "price": "ARS 85,099.00",
        "description": "Entre la multitud de móviles de gama media que nos podemos encontrar en el mercado, el Poco M4 Pro es una de las opciones que debemos barajar. Lo tiene todo para dejarnos muy satisfechos, desde lo que hay en el interior, en el exterior y por su puesto en el precio.",
        "rating": 0,
        "stock": 25,
        "categories": ["xiaomi"]
    },

    {
        "name": "Xiaomi Poco X4 Pro 5G",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/02/POCO-X4-Pro-5G-amarillo.jpg",
        "price": "ARS 62,700.00",
        "description": "Sus móviles han sido muy bien recibidos por los usuarios de nuestro país y prueba de ello es ver como los POCO X3 NFC y Poco X3 Pro han sido dos de los móviles que han encabezado las listas de ventas durante meses. El Poco X4 Pro que analizamos en esta ficha técnica es el encargado de seguir manteniendo estas buenas cifras, y lo hace mejorando en casi todo a su predecesor.",
        "rating": 0,
        "stock": 25,
        "categories": ["xiaomi"]
    },

    {
        "name": "Xiaomi Redmi Note 11 Pro 5G",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/01/Redmi-Note-11-Pro-5G-7.jpg",
        "price": "ARS 73,000.00",
        "description": "Redmi, la segunda marca de Xiaomi, ha puesto toda la carne en el asador con sus nuevos Note 11, de entre los cuales destaca el modelo que repasamos en esta ficha técnica por ser el mejor de todos ellos. Y lo es porque, entre otras cosas, es el único que te va a poder conectarte a la Red a máxima velocidad.",
        "rating": 0,
        "stock": 25,
        "categories": ["xiaomi"]
    },

    {
        "name": "Xiaomi Redmi Note 11S",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/01/Redmi-Note-11s-5.jpg",
        "price": "ARS 65,000.00",
        "description": "De los 4 nuevos smartphones de la familia Redmi que Xiaomi presentaba a finales de enero, probablemente el Redmi Note 11s es el más desconocido. ¿Qué ofrece este teléfono para ser una buena opción en torno a los 250 euros que cuesta? Sus claves están en el precio, la cámara y la pantalla.",
        "rating": 0,
        "stock": 25,
        "categories": ["xiaomi"]
    },

    {
        "name": "Xiaomi redmi note 10 pro",
        "img": "https://cdn-xiaomi.waugi.com.ar/702-home_default/xiaomi-redmi-note-10-pro-6gb128gb.jpg",
        "price": "ARS 85,099.00",
        "description": "Cuando todos pensábamos que la familia Redmi Note 10 estaba más que completa con sus cuatro miembros, Xiaomi ha presentado en mayo de 2021 un nuevo integrante que se sitúa a la cabeza de todos ellos. Este Redmi Note 10 Pro 5G destaca, como su propio nombre indica, por ser compatible con el nuevo estándar de conectividad.",
        "rating": 0,
        "stock": 25,
        "categories": ["xiaomi"]
    },

    {
        "name": "Xiaomi Redmi Note 11",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/01/Redmi-Note-11-5.jpg",
        "price": "ARS 47,000.00",
        "description": "Para Xiaomi este es el flagship del año. Por encima de los modelos premium, es el móvil que más se va a vender en 2022 al igual que el año pasado sucediera con los Redmi Note 10.",
        "rating": 0,
        "stock": 25,
        "categories": ["xiaomi"]
    },

    {
        "name": "Xiaomi 12",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/12/Xiaomi-12-18.jpg",
        "price": "ARS 48,400.00",
        "description": "Xiaomi renueva su smartphone de gama alta haciéndolo más pequeño, ligero y bonito.",
        "rating": 0,
        "stock": 25,
        "categories": ["xiaomi"]
    },

    {
        "name": "lg k10",
        "img": "https://www.lg.com/ar/images/celulares/md05753308/gallery/medium01.jpg",
        "price": "ARS 8,200.00",
        "description": "Una ganga",
        "rating": 0,
        "stock": 70,
        "categories": ["lg"]
    },

    {
        "name": "LG Velvet Aurora Gray",
        "img": "https://www.lg.com/ar/images/celulares/md07518370/gallery/D_01.jpg",
        "price": "ARS 149,899.00",
        "description": "Diseñado para impresionar. El vidrio 2.5D brinda un acabado más sofisticado y colorido a la parte posterior, y el metal lateral crea una sensación de equilibrio y distinción. Los detalles redondeados y refinados proporcionan el agarre ergonómico óptimo.",
        "rating": 0,
        "stock": 70,
        "categories": ["lg"]
    },

    {
        "name": "LG G8s",
        "img": "https://www.lg.com/ar/images/celulares/md06170304/gallery/N02(1-MD06162137)_medium02.jpg",
        "price": "ARS 24,999.00",
        "description": "Diseñado para impresionar. El vidrio 2.5D brinda un acabado más sofisticado y colorido a la parte posterior, y el metal lateral crea una sensación de equilibrio y distinción. Los detalles redondeados y refinados proporcionan el agarre ergonómico óptimo.",
        "rating": 0,
        "stock": 70,
        "categories": ["lg"]
    },

    {
        "name": "LG Q7+",
        "img": "https://www.lg.com/ar/images/celulares/md06208116/md06208117/gallery/medium01.jpg",
        "price": "ARS 35,000.00",
        "description": "Su diseño ultra compacto con borde metalizado te permitirá experimentar la máxima comodidad y disfrutar de un diseño elegante y resistente que atraerá todas las miradas. Tan agradable de mirar como de sostener.",
        "rating": 0,
        "stock": 70,
        "categories": ["lg"]
    },

    {
        "name": "LG Q60",
        "img": "https://www.lg.com/ar/images/celulares/md06164977/gallery/Q60-1-1100x730.jpg",
        "price": "ARS 40,000.00",
        "description": "Captura todo lo que te propongas con tres resultados diferentes. Cámara Súper Gran Angular con 120º con los que captar un gran grupo de personas o un gran paisaje, Cámara Estándar de 16MP con autoenfoque ultrarápido PDAF para conseguir la máxima nitidez incluso en movimiento y Sensor de Profundidad de 2MP para unos retratos perfectos.",
        "rating": 0,
        "stock": 70,
        "categories": ["lg"]
    },

    {
        "name": "LG K62",
        "img": "https://www.lg.com/ar/images/celulares/md07534659/gallery/D2.jpg",
        "price": "ARS 47,500.00",
        "description": "Gran pantalla con un discreto orificio en la parte delantera, ya no hay nada que se interponga para disfrutar tus contenidos. Ve más allá de la imaginación y siente toda la emoción de las escenas de tus películas y juegos favoritos.",
        "rating": 0,
        "stock": 70,
        "categories": ["lg"]
    },

    {
        "name": "LG K52",
        "img": "https://www.lg.com/ar/images/celulares/md07534655/gallery/D2.jpg",
        "price": "ARS 36,200.00",
        "description": "Disfruta de 6.6 pulgadas de pantalla espectacular. Todo. Con un discreto agujero en la parte delantera, no hay nada que se interponga a la vista. Ve más allá de tu imaginación y siente toda la emoción de las escenas de juegos y películas.",
        "rating": 0,
        "stock": 70,
        "categories": ["lg"]
    },

    {
        "name": "lg k10",
        "img": "https://www.lg.com/ar/images/celulares/md05753308/gallery/medium01.jpg",
        "price": "ARS 8,200.00",
        "description": "Una ganga",
        "rating": 0,
        "stock": 70,
        "categories": ["lg"]
    },

    {
        "name": "LG K61",
        "img": "https://www.lg.com/ar/images/celulares/md07534802/gallery/D2.jpg",
        "price": "ARS 51,850.00",
        "description": "Aporta más versatilidad a la fotografía. Captura tus momentos favoritos en cualquier momento, en cualquier lugar y de la manera que desees, con la excelente resolución de la cámara estándar, gran angular, sensor de profundidad, lente macro y cámara selfie de la penta cámara.",
        "rating": 0,
        "stock": 70,
        "categories": ["lg"]
    },

    {
        "name": "LG K71",
        "img": "https://www.lg.com/ar/images/celulares/md07531010/gallery/D_03.jpg",
        "price": "ARS 62,200.00",
        "description": "el tamaño de un éxito cinematográfico y cómodo de sostener para una película. 6.8 de pantalla que ahora caben en la palma de la mano, con un ancho de pantalla de 77.7 mm. Mira una serie de televisión completa, envía mensajes a tus amigos con una sola mano y siente la total facilidad gracias a su diseño ergonómico.",
        "rating": 0,
        "stock": 70,
        "categories": ["lg"]
    },

    {
        "name": "huawei p50 pro",
        "img": "https://http2.mlstatic.com/D_NQ_NP_657075-MLA48557344271_122021-O.webp",
        "price": "ARS 430.000.00",
        "description": "Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
        "rating": 0,
        "stock": 10,
        "categories": ["huawei"]
    },

    {
        "name": "Huawei nova 9 SE",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2022/03/HUAWEI-nova-9-SE-azul_3.jpg",
        "price": "ARS 72.000.00",
        "description": "Este Huawei nova 9 SE se convierte en la opción ideal para quienes les gusta disfrutar del contenido multimedia en su móvil y además les gusta que su smartphone se cargue en un momento.",
        "rating": 0,
        "stock": 10,
        "categories": ["huawei"]
    },

    {
        "name": "Huawei nova 8i",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/11/Huawei-Nova-8i-11.jpg",
        "price": "ARS 52.000.00",
        "description": "Tiene una pantalla relativamente grande, pero gracias a que no tiene casi marcos podemos ver en ella todo lo que queramos sin perdernos detalle.",
        "rating": 0,
        "stock": 10,
        "categories": ["huawei"]
    },

    {
        "name": "Huawei nova 9",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2021/10/Huawei-Nova-9-14.jpg",
        "price": "ARS 75.000.00",
        "description": "El teléfono cuenta con innovadoras características y un diseño vanguardista que sacará el lado más creativo de los usuarios más jóvenes.",
        "rating": 0,
        "stock": 10,
        "categories": ["huawei"]
    },

    {
        "name": "Huawei P50",
        "img": "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pro/list/gold.png",
        "price": "ARS 341.000.00",
        "description": "Estamos ante un teléfono que presume de compatibilidad con toda la gama de colores P3 para ofrecer colores precisos y fieles a la realidad. Este panel OLED admite hasta 1.070 millones de colores, lo que permite una verdadera experiencia HDR.",
        "rating": 0,
        "stock": 10,
        "categories": ["huawei"]
    },

    {
        "name": "Huawei Mate X2",
        "img": "https://i.blogs.es/1422a8/huawei-mate-x2-01/1366_2000.jpg",
        "price": "ARS 259.000.00",
        "description": "El lanzamiento del Huawei Mate X2 vuelve a poner de manifiesto el interés por este tipo de smartphones con pantalla plegable.",
        "rating": 0,
        "stock": 10,
        "categories": ["huawei"]
    },

    {
        "name": "Huawei Mate 40 RS Porsche Design",
        "img": "https://ar.celulares.com/fotos/huawei-mate-40-rs-porsche-design-87854-g-alt.jpg",
        "price": "ARS 348.000.00",
        "description": "Al igual que sus hermanos, este tope de gama de la familia Mate 40 luce un agujero de la pantalla en forma de píldora que relega hace olvidar al notch de las versiones de 2019 y cuenta con un módulo circular para alojar los sensores de cámara en la parte posterior.",
        "rating": 0,
        "stock": 10,
        "categories": ["huawei"]
    },

    {
        "name": "Huawei Mate 40",
        "img": "https://specs-tech.com/wp-content/uploads/2020/12/Huawei-Mate-40-.jpg",
        "price": "ARS 420.000.00",
        "description": "Con una pantalla más pequeña, y recortes en la cámara y batería, repasamos todas las especificaciones que dan vida a la ficha técnica del Huawei Mate 40.",
        "rating": 0,
        "stock": 10,
        "categories": ["huawei"]
    },

    {
        "name": "Huawei Mate 40 Pro",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2020/10/Huawei-Mate-40-Pro-1-2.jpg",
        "price": "ARS 430.000.00",
        "description": "Nuevas tecnologías de carga para su batería, una pantalla Horizon Display Curvada y mejoras en el software que traten de suplir la ausencia de los servicios de Google en el teléfono.",
        "rating": 0,
        "stock": 10,
        "categories": ["huawei"]
    },

    {
        "name": "Huawei Y8p",
        "img": "https://www.movilzona.es/app/uploads-movilzona.es/2020/08/Huawei-Y8p-3-1.jpg",
        "price": "ARS 49.000.00",
        "description": "Este Huawei Y8p se lanzaba a nivel mundial en verano de 2020 como una renovación de la oferta de teléfonos inteligentes de la compañía.",
        "rating": 0,
        "stock": 10,
        "categories": ["huawei"]
    }
]

module.exports = {
    typesProducts,
}