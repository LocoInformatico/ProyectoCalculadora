//Declaramos variables
var operandoa;
var operandob;
var operacion;
var resultado;
var valPunto = false;


var Calculadora = {
    init: function(){
        resultado = document.getElementById('display');
        document.onkeypress = this.validaNumeros;
        document.getElementById('1').onclick        = this.uno
        document.getElementById('2').onclick        = this.dos
        document.getElementById('3').onclick        = this.tres
        document.getElementById('4').onclick        = this.cuatro
        document.getElementById('5').onclick        = this.cinco
        document.getElementById('6').onclick        = this.seis
        document.getElementById('7').onclick        = this.siete
        document.getElementById('8').onclick        = this.ocho
        document.getElementById('9').onclick        = this.nueve
        document.getElementById('0').onclick        = this.cero 
        document.getElementById('punto').onclick    = this.punto
        document.getElementById('sign').onclick     = this.signo
        document.getElementById('por').onclick      = this.multiplica
        document.getElementById('menos').onclick    = this.resta
        document.getElementById('dividido').onclick = this.divide
        document.getElementById('mas').onclick      = this.suma
        document.getElementById('igual').onclick    = this.igual
        document.getElementById('raiz').onclick     = this.raiz
        document.getElementById('on').onclick       = this.borrarTodo;
        this.asignarEventoMousedown('tecla');
        this.asignarEventoMouseup('tecla');
    },

    borrarTodo: function() {
        tamanoNormal('on')
        resultado.textContent = "0";
        operandoa = 0;
        operandob = 0;
        operacion = "";
        valPunto  = false;
    },

    uno: function(){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "1"
        }
//        tamanoNormal('1');
    },

    dos: function(){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "2";
        }
//        tamanoNormal('2')
    },

    tres: function(){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "3";
        }
//        tamanoNormal('3')
    },

    cuatro: function(){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "4";
        }
//        tamanoNormal('4')
    },

    cinco: function(){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "5";
        }
//        tamanoNormal('5')
    },

    seis: function(){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "6";
        }
//        tamanoNormal('6')
    },

    siete: function(){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "7";
        }
//        tamanoNormal('7')
    },

    ocho: function(){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "8";
        }
//        tamanoNormal('8')
    },

    nueve: function() {
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "9";
        }
//        tamanoNormal('9')
    },

    cero: function(){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "0";
        }
//        tamanoNormal('0')
    },

    punto: function(){
        if(resultado.textContent == '0'){
            limpiar()
        }
        if(resultado.textContent.length <= 7 && !valPunto ) {
            resultado.textContent = resultado.textContent + '.'
            valPunto = true;
        }
//        tamanoNormal('punto')
    },

    signo: function() {
        resul = resultado.textContent
        result = parseFloat(resul) * -1
        resultado.textContent = result
//        tamanoNormal('sign')
    },

    multiplica: function(){
//        tamanoNormal('por')
        operandoa = resultado.textContent
        operacion = '*'
        valPunto = false
        limpiar();
    },

    resta: function() {
//        tamanoNormal('menos')
        operandoa = resultado.textContent
        operacion = '-'
        valPunto = false
        limpiar()
    },

    divide: function(){
//        tamanoNormal('dividido')
        operandoa = resultado.textContent
        operacion = '/'
        valPunto = false
        limpiar()
    },

    suma: function(){
//        tamanoNormal('mas')
        operandoa = resultado.textContent
        operacion = '+'
        valPunto = false
        limpiar()
    },

    raiz: function() {
//        tamanoNormal('raiz')
        operandoa = resultado.textContent
        operacion = '^'
        valPunto = false
        respuesta();
    },

    igual: function() {
//        tamanoNormal('igual')
        operandob = resultado.textContent
        respuesta();
    },

    asignarEventoMousedown: function(selector) {
        var tecla = document.getElementsByClassName(selector);
        for (var i = 0; i < tecla.length; i++) {
            tecla[i].onmousedown = this.cambiaTamanoReducido;
        }
    },

    asignarEventoMouseup: function(selector) {
        var tecla = document.getElementsByClassName(selector);
        for (var i = 0; i < tecla.length; i++) {
            tecla[i].onmouseup = this.cambiaTamanoNormal;
        }
    },

    cambiaTamanoReducido: function(event) {
        reducirTamano(event.target)
    },

    cambiaTamanoNormal: function(event) {
        tamanoNormal(event.target)
    }
}

Calculadora.init()

function limpiar(){
    resultado.textContent = "";
}

function respuesta(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob)
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob)
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob)
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob)
            break;
        case '^':
            res = Math.sqrt(parseFloat(operandoa))
            break;
    }
    resultado.textContent = Math.trunc(res,8);
}

function reducirTamano(e) {
    e.style.transform = 'scale(0.85)'
}

function tamanoNormal(e) {
    e.style.transform = 'scale(1)'}