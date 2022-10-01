/* Exec 01 */

// let ListaDeNumeros : number[]
// ListaDeNumeros = []

// for(let index = 0; index < 5; index++){
//     let Valor = Number(prompt("Digite um número"))

//     if(Valor > 0){
//         Valor = 1
//     }

//     else{
//         Valor = -1
//     }

//     ListaDeNumeros.push(Valor)

// }

// console.log(ListaDeNumeros)





/* Exec 02 */

// let ListaDeNumeros : number[] = []

// for(let index = 0; index < 5; index++){
//     let Validator = true
//     let Valor = Number(prompt("Digite um número"))
    
//     ListaDeNumeros.forEach(Verificate)

//     if(Validator == true){
//         ListaDeNumeros.push(Valor)
//     }

//     function Verificate(item : number) :void{
//         if(item == Valor){
//             Validator = false
//             index--
//             alert("Digite outro valor")
//         }
//     }
// }

// console.log(ListaDeNumeros)





/* Exec 03 */

// let Choice = true
// let Contador = 0
// let ArrayA : number [] = []
// let ArrayB : number [] = []
// let ArrayC : number [] = []


// while(Choice){
//     let ValorA = Number(prompt("Digite um valor"))

//     if(ValorA == 0 || ValorA < 0){
//     alert("Valor inválido")
//     }

//     let ValorB = Number(prompt("Digite um valor"))
//     if(ValorB == 0 || ValorB < 0){
//     alert("Valor inválido")
//     }

//     if(ArrayB.includes(ValorA) && ArrayA.includes(ValorB)){
//         ArrayC.push(ValorB)
//     }

//     ArrayA.push(ValorA)
//     ArrayB.push(ValorB)

//     let Continuar = prompt("Deseja continuar ?")
//     if(Continuar == "Não"){
//         Choice = false
//     }
    
// }


// console.log(ArrayA)
// console.log(ArrayB)
// console.log(ArrayC)





/* Exec 04 */

// let Choice = true
// let ArrayA : number[] =[]

// while(Choice){
//     let Valor = Number(prompt("Digite um valor"))

//     ArrayA.push(Valor)

//     let Continuar = prompt("Deseja continuar ?")
//     if(Continuar == "Não"){
//         Choice = false
//     }
// }

// let Mudanca = ArrayA.filter(function(item : number) : number{
//     item > 0
//     return item
// })

// console.log(Mudanca)


