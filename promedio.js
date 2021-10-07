// VALORES GLOBALES
const lista = [];
const valoresLista = document.getElementById('ValoresLista');
let contadorValores = 0;

//CREANDO LA LISTA

const listaOrdenada = (lista) => {
    lista.sort((a,b) => a - b );
}
//PROMEDIO

const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento)=> valorAcumulado + nuevoElemento);

    let promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//MEDIANA

const isODD = (num) => num % 2;

const calcularMediana = (lista) => {
    let mediana = 0;
    if (isODD(lista.length)){
        return mediana = lista[parseInt((lista.length)/2)]
    }else{
        let pos1 = parseInt((lista.length - 1) / 2);
        let pos2 = pos1 + 1;
        return mediana = (lista[pos1] + lista[pos2]) / 2;
    }
}

//MODA

const calcularModa = (lista) =>{
    let moda = 0;
    let counts = {}

    for(let i =0; i < lista.length; i++){ 
        if (counts[lista[i]]){
            counts[lista[i]] += 1
        } else {
            counts[lista[i]] = 1
        }
     }
     
     for (let prop in counts){
        if (counts[prop] >= 2){
            //console.log(prop + " counted: " + counts[prop] + " times.");
            return prop;
        }
    }

    
}


// HTML

const agregarNuevoValor = () => {
    contadorValores++;
    let ID = 'valor' + contadorValores;
    valoresLista.innerHTML += `<label for="${ID}">Valor ${contadorValores}</label> <input type="number" id="${ID}">`   
}

const resultadoLista = () => {
    let contadorIndice = contadorValores;
    for (let i = 0; i < contadorValores; i++){
        lista[contadorIndice] = parseInt(document.getElementById(`valor${contadorIndice}`).value);
        contadorIndice--;
    }
    lista.shift(); // elimina el primer elemento del array
    listaOrdenada(lista);
}

const resultadoPromedio = () =>{
    resultadoLista();
    document.getElementById('resultado').innerText = `El promedio de la lista es: ${calcularMediaAritmetica(lista)}`;
}

const resultadoMediana = () => {
    resultadoLista();
    document.getElementById('resultado').innerText = `La mediana de la lista es: ${calcularMediana(lista)}`;
    
}

const resultadoModa = () => {
    resultadoLista();
    document.getElementById('resultado').innerText = `La moda de la lista es: ${calcularModa(lista)}`;
}
