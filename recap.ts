// ESEMPIO DI INTERFACCIA
interface Persona {
    nome: string;
    eta: number;
    haFigli: boolean;
}

let me: Persona = { nome: "Fabio", eta: 39, haFigli: false };


// ESEMPIO DI ESTENSIONE
interface Lavoratore extends Persona {
    work: string;
}

let io: Lavoratore = { nome: "Fabio", eta: 40, haFigli: true, work: "Sviluppatore Web" };
console.log(io);


// TYPE
type Libro = {
    titolo: string;
    autore: string;
    annoPubblicazione: number;
    disponibileInEbook: boolean;
};

let LibroPreferito: Libro = {
    titolo: "Il Nome della Rosa",
    autore: "Umberto Eco",
    annoPubblicazione: 1980,
    disponibileInEbook: true
};

console.log(LibroPreferito);


// PARTIAL (UTILITY TYPES)
let mioNome: Partial<Persona> = { nome: "Fabio" };
let anni: Partial<Persona> = { eta: 39 };
let figli: Partial<Persona> = { haFigli: false };

// READ ONLY (UTILITY TYPES)
interface Residenza {
    paese: string;
    regione: string;
    provincia: string;
    citta: string;
    CAP: number;
}

let casaMia: Readonly<Residenza> = {
    paese: "Italia",
    regione: "Puglia",
    provincia: "BT",
    citta: "Bisceglie",
    CAP: 76011
};

// PICK (UTILITY TYPES)
interface TV {
    produttore: string;
    modello: number;
    risoluzione: string;
    pannello: string;
}

let miaTv: Pick<TV, "produttore" | "risoluzione"> = { produttore: "Samsung", risoluzione: "1080p" };

// OMIT (UTILITY TYPES)
interface Car {
    produttore: string;
    modello: number;
    tecnologia: string;
}

let miaMacchina: Omit<Car, "tecnologia"> = { produttore: "Tesla", modello: 2023 };


// CLASSI
class Film {
    titolo: string;
    regia: string;
    anno: number;
    alCinema: boolean;

    constructor(titolo: string, regia: string, anno: number, alCinema: boolean) {
        this.titolo = titolo;
        this.regia = regia;
        this.anno = anno;
        this.alCinema = alCinema;
    }
}
let filmPreferito = new Film("Nuovo cinema paradiso", "Giuseppe Tornatore", 1988, false);


// FUNZIONE BMI
function calcolaBMI(peso: number, altezza: number): number {
    return peso / (altezza * altezza);
}

let peso: number = 70;
let altezza: number = 1.75;
let bmi = calcolaBMI(peso, altezza);

if (bmi > 25) {
    console.log(`Sei in sovrappeso`);
} else {
    console.log(`Il tuo peso è nella norma`);
}


// TUPLA 
let film: [string, number, boolean] = ["Taxi Driver", 120, false];
let [titolo, durata, streaming] = film;
console.log(`${titolo}, che dura ${durata} minuti, ${streaming ? "è disponibile su Netflix" : "non è disponibile su Netflix"}`);


// CLASSE ASTRATTA
abstract class Veicolo {
    abstract numeroRuote: number;
    abstract tipoCarburante: string;

    descrizione(): void {
        console.log(`Questo veicolo ha ${this.numeroRuote} ruote e utilizza ${this.tipoCarburante} come carburante.`);
    }

    abstract accelera(): void;
}

class Auto extends Veicolo {
    numeroRuote = 4;
    tipoCarburante = "benzina";

    accelera(): void {
        console.log("L'auto accelera rapidamente.");
    }
}

class Moto extends Veicolo {
    numeroRuote = 2;
    tipoCarburante = "diesel";

    accelera(): void {
        console.log("La moto accelera con grande velocità.");
    }
}

let miaAuto = new Auto();
miaAuto.descrizione();  // Output: Questo veicolo ha 4 ruote e utilizza benzina come carburante.
miaAuto.accelera();     // Output: L'auto accelera rapidamente.

let miaMoto = new Moto();
miaMoto.descrizione();  // Output: Questo veicolo ha 2 ruote e utilizza diesel come carburante.
miaMoto.accelera();     // Output: La moto accelera con grande velocità.


// RECORD
type MembroFamiglia = "Nicola" | "Anna" | "Angelo" | "Fabio";

interface InfoFamiglia {
    ruolo: string;
    anni: number;
}

const Famiglia: Record<MembroFamiglia, InfoFamiglia> = {
    Nicola: { ruolo: "padre", anni: 67 },
    Anna: { ruolo: "madre", anni: 74 },
    Angelo: { ruolo: "figlio", anni: 43 },
    Fabio: { ruolo: "figlio", anni: 39 }
};

console.log(Famiglia.Fabio);
