"use strict";
//bolean(true/false)
let isOpen;
isOpen = true;
//string('foo', "foo", `foo`)
let messagem;
messagem = `foo ${isOpen}`;
//number(int, float, hex, binary)
let total;
total = 0xff0;
//array(type[])
let intems;
intems = [1, 2, 3];
let value;
value = [3, 4, 5];
//tuple
let title;
title = [1, 'foo', 'bar'];
//enum
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
})(colors || (colors = {}));
//any(qualquer coisa)NÃO É LEGAL!!!
let coisa;
coisa = 'string';
//void (vazio)
function logger() {
    console.log('foo');
}
//never
function error() {
    throw new Error("error");
}
//object
let cart;
cart = {
    key: 'fi'
};
//type inference
let messagem2 = 'mensagem definida';
messagem2 = 'string nova';
window.addEventListener('click', (e) => {
    console.log(e.target);
});
