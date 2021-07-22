let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
};

// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDolar){
    // convertimos el valor a dolares
    let valueInYen = (valueInDolar/oneEuroIs.USD) * 127.9;
    // retornamos el valor    
    return parseFloat(valueInYen.toFixed(2));    
};
//console.log(fromDollarToYen(1))
//dasdas
// declaramos una funcion con el mismo nombre "fromDollarToPound"
const fromDollarToPound = function(valueInDolar){
    // convertimos el valor a dolares
    let valueInPound = (valueInDolar/oneEuroIs.USD) * 0.8;
    // retornamos el valor
    return parseFloat(valueInPound.toFixed(2));
};

//console.log(fromDollarToPound(2))


// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
//console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromDollarToPound};