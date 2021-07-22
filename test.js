// importar la función sum del archivo app.js
const { TestWatcher } = require('jest');
const { sum, fromEuroToDollar, fromDollarToYen, fromDollarToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


//test tarea
test("One euro should be 1.206 dollars", function(){        
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("1 dolar should be 108.25 yen", function(){        
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(106.58); 
})

 test("Two dolar should be 1.33 pound", function(){        
     // hago mi comparacion (la prueba)
     expect(fromDollarToPound(2)).toBe(1.33); 
 })