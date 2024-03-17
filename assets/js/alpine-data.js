
document.addEventListener( 'alpine:init', () => {
    Alpine.data( 'appData', function () {
        return {
            isDark: this.$persist( false ).as( 'notiauto-darkmode' ),
            isEng: this.$persist( false ).as( 'notiauto-language' ),
            isOpenMenu: false,

            lang: {
                en: {
                    "menu":{
                        "home": "Home",
                        "features": "Features",
                        "plan": "Plans",
                        "testimonials": "Testimonials",
                        "faq": "FAQ"
                    },
                    "overview":{
                        "promMsg": "Your first 50 clients FREE!",
                        "title": "Best app for manage your client cars",
                        "subtitle1": "Increase productivity with a simple car manage app",
                        "subtitle2": "application for manage your car repair process",
                        "button": "Try for free"
                    },
                    "companies": "Trusted by companies like",
                    "features": {
                      "title": "Awesome apps features",
                      "description": "Increase productivity with a simple manage time app.<br class='d-none d-xl-block' /> App for managing your car repair time",
                      "efficiency": "Efficiency",
                      "effiDesc": "Provide a controlled and orderly record of information",
                      "trust": "Trust",
                      "trustDesc": "Build customer trust through clear records",
                      "historical": "historical",
                      "hisDesc": "Check every change or repair made to your car over time",
                      "title2": "Check the status of your car anytime, anywhere",
                      "description2": "Once the mechanic has registered the entry of your car, you can continue your routine or itinerary, since the application allows you to see when your car is ready to be picked up"
                    },
                    "technologies": {
                        "title": "Technologies used to build this application",
                        "description": "This app was created using the latest modern technologies as Flutter, Dark, Bootstrap 5, Alpine JS and more"
                    },
                    "whyuseit":{
                        "title": "Why you should choose our app",
                        "subtitle": "The rise of mobile devices completely transforms the way we organize and do our daily activities, which is why we created this application to:",
                        "reason1": "App Development",
                        "description1": "Our application was created with the most modern technologies on the market",
                        "reason2": "More than 500 installations",
                        "description2": "We are growing exponentially and more and more users are using our app",
                        "reason3": "Cloud Storage",
                        "description3": "All the information about your car is stored in the cloud, which allows you to review it whenever you want",
                        "reason4": "Customization",
                        "description4": "You can customize the appearance and language of your app",
                        "reason5": "UX / UI",
                        "description5": "The app takes meticulous care of the interface and user experience",
                        "reason6": "Customer Support",
                        "description6": "We count with many ways to receive support about all our process and services",
                    },
                    "ultimate": {
                        "title": "Ultimate features<br />that we built",
                        "description": "The rise of mobile devices completely transforms the way we organize and do our daily activities"
                    },
                    "pricing": {
                        "title": "Get awesome features, without extra charges",
                        "description": "Get all our services with a single payment and enjoy a real history of your car",
                        "monthly": "Monthly",
                        "yearly": "Yearly",
                        "business": "Business Class",
                        "busidesc": "For small mechanical workshops",
                        "businesspro": "Pro Business",
                        "busiprodesc": "For large mechanical workshops",
                        "item1": "Register up to 50 clients",
                        "item2": "Can't see history",
                        "item3": "Allows you to update cart status",
                        "item4": "unlimited time",
                        "item5": "Unlimited customer registration",
                        "item6": "You can see the car history",
                        "item7": "Allows you to update cart status",
                        "item8": "unlimited time",
                        "button1": "Start free trial",
                        "button2": "Buy Now!",
                    },
                    "testimonial": {
                        "title": "See what our customers think",
                        "description": "Learn about the satisfaction of our customers through the use of the app"
                    }
                },
                es: {
                    "menu":{
                        "home": "Inicio",
                        "features": "Características",
                        "plan": "Planes",
                        "testimonials": "Testimonios",
                        "faq": "FAQ"
                    },
                    "overview":{
                        "promMsg": "Tus primeros 50 clientes GRATIS!",
                        "title": "La mejor aplicación para gestionar los coches de tus clientes",
                        "subtitle1": "Aumente la productividad con una sencilla aplicación de gestión de autos",
                        "subtitle2": "aplicación para gestionar el proceso de reparación de tu auto",
                        "button": "Prueba Gratis!"
                    },
                    "companies": "Con la confianza de empresas como",
                    "features": {
                      "title": "Características de la Aplicación",
                      "description": "Aumente la productividad con una aplicación para gestionar el tiempo de reparación de tu coche.",
                      "efficiency": "Eficiencia",
                      "effiDesc": "Proporcionar un registro controlado y ordenado de la información",
                      "trust": "Confianza",
                      "trustDesc": "Fomenta la confianza del cliente a través de la claridad de los registros",
                      "historical": "históricos",
                      "hisDesc": "Consulta cada cambio o reparación hecho a traves del tiempo a tu vehiculo",
                      "title2": "Verifica el estado de tu carro en cualquier momento y en cualquier lugar",
                      "description2": "Una vez el mecánico haya registrado el ingreso de tu carro, puede continuar tu rutina o itinerario, ya que la aplicación te permite ver cuando tu carro este listo para retirarlo"
                    },
                    "technologies": {
                        "title": "Tecnologías utilizadas para construir esta aplicación",
                        "description": "Esta aplicación fue creada utilizando las últimas tecnologías modernas como Flutter, Dark, Bootstrap 5, Alpine JS y más"
                    },
                    "whyuseit":{
                        "title": "¿Por qué deberías elegir nuestra aplicación?",
                        "subtitle": "El auge de los dispositivos móviles transforma por completa la forma en que organizamos y hacemos nuestras actividades diarias, por lo que creamos está aplicación para:",
                        "reason1": "Desarrollo de la aplicación",
                        "description1": "Nuestra aplicación fue creada con las tecnologias mas modernas del mercado",
                        "reason2": "Más de 500 instalaciones",
                        "description2": "Estamos creciendo exponencialmente y cada vez son más usuarios los que utilizan nuestra app",
                        "reason3": "Almacenamiento en la nube",
                        "description3": "Toda la información de tu carro se almacena en la nube lo que permite que pueda revisarla en el momento que desees",
                        "reason4": "Personalización",
                        "description4": "Tú puedes personalizar la apariencia e idioma de tu app",
                        "reason5": "Experiencia de usuario",
                        "description5": "La app cuida minuciosamente la interfaz y experiencia de usuario",
                        "reason6": "Atención al cliente",
                        "description6": "Contamos con muchas formas de recibir soporte sobre todos nuestros procesos y servicios",
                    },
                    "ultimate": {
                        "title": "Funciones definitivas<br/> que hemos creado",
                        "description": "El auge de los dispositivos móviles transforma por completa la forma en que organizamos y hacemos nuestras actividades diarias"
                    },
                    "pricing": {
                        "title": "Get awesome features, without extra charges",
                        "description": "Obten todos nuestros servicios con un único pago y disfruta de un historico real de tu carro",
                        "monthly": "Mensual",
                        "yearly": "Anual",
                        "business": "Pequeños Negocios",
                        "busidesc": "Para pequeños talleres mecánicos",
                        "businesspro": "Grandes Negocios",
                        "busiprodesc": "Para grandes talleres mecánicos",
                        "item1": "Registra hasta 50 clientes",
                        "item2": "No puede ver el historial",
                        "item3": "Permite actualizar estado del carro",
                        "item4": "tiempo ilimtado",
                        "item5": "Registra ilimitado de clientes",
                        "item6": "Puedes ver el historial del carro",
                        "item7": "Permite actualizar estado del carro",
                        "item8": "unlimited time",
                        "button1": "Empieza Gratis",
                        "button2": "Comprar Ahora!",
                    },
                    "testimonial": {
                        "title": "Mira lo que nuestros clientes opinan",
                        "description": "Conoce la satisfacción de nuestros clientes mediante el uso de la app"
                    }

                },
          }
            
        }
    })
})