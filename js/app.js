//Declaramos variables
var operandoa;
var operandob;
var operacion;
var resultado;


var Eventos = {
    init: function(){
        resultado = document.getElementById('display');
        document.getElementById('on').onclick = this.borrarTodo;
        document.onkeypress = this.validaNumeros;
        document.getElementById('1').onclick = this.uno
        document.getElementById('2').onclick = this.dos
        document.getElementById('3').onclick = this.tres
        document.getElementById('4').onclick = this.cuatro
        document.getElementById('5').onclick = this.cinco
        document.getElementById('6').onclick = this.seis
        document.getElementById('7').onclick = this.siete
        document.getElementById('8').onclick = this.ocho
        document.getElementById('9').onclick = this.nueve
        document.getElementById('0').onclick = this.cero
        document.getElementById('punto').onclick = this.punto
        document.getElementById('sign').onclick = this.signo
    },

    borrarTodo: function(e) {
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";    
    },

    validaNumeros: function(numero) {
        var tecla = document.getElementById('numero')
    },

    uno: function(e){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 8) {
            resultado.textContent = resultado.textContent  + "1";
        }
    },

    dos: function(e){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "2";
        }
    },

    tres: function(e){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "3";
        }
    },

    cuatro: function(e){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "4";
        }
    },

    cinco: function(e){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "5";
        }
    },

    seis: function(e){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "6";
        }
    },

    siete: function(e){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "7";
        }
    },

    ocho: function(e){
        if(resultado.textContent == '0') {
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent  + "8";
        }
    },

    nueve: function(e) {
        if(resultado.textContent == '0'){
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent + "9";
        }
        
    },

    cero: function(e){
        if(resultado.textContent == '0'){
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent + '0'
        }
    },

    punto: function(e){
        if(resultado.textContent == '0'){
            limpiar()
        }
        if(resultado.textContent.length <= 7) {
            resultado.textContent = resultado.textContent + '.'
        }
    },

    signo: function(e) {
        var resul = resultado.textContent
        result = parseFloat(resul) * -1
        resultado.textContent = result
    }

}

Eventos.init()

function limpiar(){
    resultado.textContent = "";
}