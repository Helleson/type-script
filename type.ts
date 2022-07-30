//bolean(true/false)
let isOpen: boolean
isOpen = true

//string('foo', "foo", `foo`)
let messagem: string
messagem = `foo ${isOpen}`

//number(int, float, hex, binary)
let total: number
total  = 0xff0


//array(type[])
let intems:number[]
intems = [1,2,3]

let value: Array<number>
value = [3,4,5]

//tuple
let title: [number,string, string]
title = [1, 'foo', 'bar']

//enum
enum colors {
    white = '#fff',
    black = '#000'
}

//any(qualquer coisa)NÃO É LEGAL!!!
let coisa: any
coisa = 'string'

//void (vazio)

function logger():void {
    console.log('foo')
}

//null | undefined
type Bla = string | undefined

//never
function error(): never{
    throw new Error("error")
}

//object
let cart: object
cart = {
    key: 'fi'
}

//type inference
let messagem2 = 'mensagem definida'
messagem2 = 'string nova'

window.addEventListener('click', (e)=>{
   console.log(e.target)
   
})