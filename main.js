// let inicio_for = new Date() conteo de tiempo de respuesta que no he sabido hacer :C

// for (let i = 0; i < 10000; i++) {


// Clase para manejar el cuestionario
class Quiz {

    constructor() {
        this.totalPuntos = 0;
        this.totalCorrectos = 0;
        this.totalIncorrectos = 0;
        this.nombreUsuario = '';

        this.preguntas = [
            { pregunta: "¿Cuándo se estrenó Psicosis? (Alfred Hitchcock)", respuesta: "1960" },
            { pregunta: "¿Cuándo se estrenó La Naranja Mecánica? (Stanley Kubrik)", respuesta: "1971" }, 
            { pregunta: "¿Cuándo se estrenó Reservoir Dogs? (Quentin Tarantino)", respuesta: "1992" },
            { pregunta: "¿Cuándo se estrenó Réquiem por un Sueño? (Darren Aronofsky)", respuesta: "2000" },
            { pregunta: "¿Cuándo se estrenó Whiplash? (Damien Chazelle)", respuesta: "2014" },
            { pregunta: "¿Cuándo se estrenó Avengers: Endgame? (Hermanos Russo)", respuesta: "2019" }
        ];

    }

    // funcion para puntos correctos
    puntosCorrectos() {
        this.totalCorrectos++;
        this.totalPuntos++;
    }

    // funcion para puntos incorrectos
    puntosIncorrectos() {
        this.totalIncorrectos++;
        this.totalPuntos--;
    }

    // función sobre Pepe
    nameIsPepe() {
        if (this.nombreUsuario === "pepe") {
            this.totalPuntos = 7;
            alert('¡Ganaste!');
            return true; // arreglo error anterior, salía info extra innecesaria (paramos cuestionario así)
        }
        return false;
    }

    // funcion de la alerta final
    avisoFinal() {

        alert(`${this.nombreUsuario.toUpperCase()}: has acertado ${this.totalCorrectos} preguntas sobre 6`);
        alert(`${this.nombreUsuario.toUpperCase()}: has fallado ${this.totalIncorrectos} preguntas sobre 6`);
        alert(`Tu total de puntos es de ${this.totalPuntos}`);

    }

    // funcion del cuestionario en sí
    iniciar() {

        this.nombreUsuario = prompt('¿Cuál es tu nombre?').toLowerCase();

        if (this.nameIsPepe()) return;

        // Ciclo para iterar sobre las preguntas
        this.preguntas.forEach(preguntaObj => {
            const respuestaUsuario = prompt(preguntaObj.pregunta);
            if (respuestaUsuario === preguntaObj.respuesta) {
                this.puntosCorrectos();
            } else {
                this.puntosIncorrectos();
            }

        });

        this.avisoFinal();

    }

}

// se inicia
const quiz = new Quiz();
quiz.iniciar();

// } fin del conteo de tiempo que no supe hacer :'C
// let fin_for = new Date()

// console.log(fin_for - inicio_for)