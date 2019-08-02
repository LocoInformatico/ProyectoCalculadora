//Declaramos variables
var operandoa;
var operandob;
var operacion;
var resultado;
var valPunto = false;


var Eventos = {
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
        document.getElementById('menos').contains   = this.resta
        document.getElementById('dividido').onclick = this.divide
        document.getElementById('mas').onclick      = this.suma
        document.getElementById('igual').onclick    = this.igual
        document.getElementById('raiz').onclick     = this.raiz
        document.getElementById('on').onclick       = this.borrarTodo;
    },

    borrarTodo: function() {
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
        valPunto  = true;
    },

    uno: function(){
        if(resultado.textContent != '0') {
            if(resultado.textContent.length <= 7) {
                resultado.textContent = resultado.textContent  + "1";
            }    
        }else {
            limpiar()
        }
        
    },

    dos: function(){
        if(resultado.textContent != '0') {
            if(resultado.textContent.length <= 7) {
                resultado.textContent = resultado.textContent  + "2";
            }    
        }else {
            limpiar()
        }
    },

    tres: function(){
        if(resultado.textContent != '0') {
            if(resultado.textContent.length <= 7) {
                resultado.textContent = resultado.textContent  + "3";
            }    
        }else {
            limpiar()
        }
        
    },

    cuatro: function(){
        if(resultado.textContent != '0') {
            if(resultado.textContent.length <= 7) {
                resultado.textContent = resultado.textContent  + "4";
            }
        }else {
            limpiar()
        }
        
    },

    cinco: function(){
        if(resultado.textContent != '0') {
            if(resultado.textContent.length <= 7) {
                resultado.textContent = resultado.textContent  + "5";
            }
        }else {
            limpiar()
        }
        
    },

    seis: function(){
        if(resultado.textContent != '0') {
            if(resultado.textContent.length <= 7) {
                resultado.textContent = resultado.textContent  + "6";
            }
        }else {
            limpiar()
        }
    },

    siete: function(){
        if(resultado.textContent != '0') {
            if(resultado.textContent.length <= 7) {
                resultado.textContent = resultado.textContent  + "7";
            }
        }else {
            limpiar()
        }
    },

    ocho: function(){
        if(resultado.textContent != '0') {
            if(resultado.textContent.length <= 7) {
                resultado.textContent = resultado.textContent  + "8";
            }
        }else {
            limpiar()
        }
    },

    nueve: function() {
        if(resultado.textContent != '0'){
            if(resultado.textContent.length <= 7) {
                resultado.textContent = resultado.textContent + "9";
            }
        }else {
            limpiar()
        }
    },

    cero: function(){
        if(resultado.textContent != '0'){
            if(resultado.textContent.length <= 7) {
                resultado.textContent = resultado.textContent + '0'
            }
        }else {
            limpiar()
        }
    },

    punto: function(){
        if(resultado.textContent != '0'){
            if(resultado.textContent.length <= 7 && !valPunto ) {
                resultado.textContent = resultado.textContent + '.'
                valPunto = true;
            }
        }else {
            limpiar()
        }
    },

    signo: function() {
        resul = resultado.textContent
        result = parseFloat(resul) * -1
        resultado.textContent = result
    },

    multiplica: function(){
        operandoa = resultado.textContent
        operacion = '*'
        limpiar();
    },

    resta: function() {
        operadora = resultado.textContent
        operacion = '-'
        limpiar()
    },

    divide: function(){
        operadora = resultado.textContent
        operacion = '/'
        limpiar()
    },

    suma: function(){
        operadora = resultado.textContent
        operacion = '+'
        limpiar()
    },

    raiz: function() {
        operandoa = resultado.textContent
        operacion = '^'
        respuesta();
    },

    igual: function() {
        operandob = resultado.textContent
        respuesta();
    }

}

Eventos.init()

function limpiar(){
    resultado.textContent = "";
}

function respuesta(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case '^':
            res = Math.sqrt(parseFloat(operadora))
            break;
    }
    resultado.textContent = res;
  }