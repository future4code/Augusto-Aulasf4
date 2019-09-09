//mostra todos pares entre 1 e 5
for (i=1;i<=5;i++){
  if (i%2==0)
  console.log(i)
}
//mostra divisiveis por 3 e 5 e comenta de acordo
for (i=1;i<=100;i++){
  if(i%3==0 && i%5==0)
    console.log('Future4',i, 'por 3 e 5')
  else if (i%3==0)
    console.log('Future',i,'por 3')
  else if (i%5==0)
  console.log('Four',i, 'por 5')
  
}
//mostra o maior

const lista = [11, 12, 49, 15, 16, 30, 51, 3, 10] 
maior = 0
for (let numeros of lista){
  if (numeros> maior){
    maior=numeros
  }

}
console.log(maior)

//mostra o menor
const lista2 = [83, 9, 82, 15, 22, 44, 51, 13, 44] 
menor = 1000
for (let numeros of lista2){
  if (numeros< menor){
    menor=numeros
  }

}
console.log(menor)

//faz a media
const lista3 = [4, 9, 77, 4, 43, 1, 5, 1, 33] 
let soma=0
for(let numero of lista3){
soma=numero+soma

}
let media = soma / lista3.length

//ex 1
function ex1(){
console.log(media)
const min=1
const max=20
let nEscolhido = Math.floor((Math.random() * max) + min);
acertou=true
let contador=0
while(acertou){
let chute = Number(prompt('Chute um numero'))
  if (chute==nEscolhido ){
    alert('acertou')
    acertou=false
  }else{
    if(chute>nEscolhido){
    alert('Para Baixo')

    }else{
      alert('Para Cima')
    }
  }
  contador++
}console.log('Voce precisou de : '+ contador + ' tentativas')
}


//ex2

function ex2(){
const min=1
const max=100
let nEscolhido = Math.floor((Math.random() * max) + min);
acertou=true
let contador=0
while(acertou){
let chute = Number(prompt('Chute um numero'))
  if (chute==nEscolhido ){
    alert('acertou')
    acertou=false
  }else{
    if(chute>nEscolhido){
    alert('Para Baixo')

    }else{
      alert('Para Cima')
    }
  }
  contador++
}
console.log('Voce precisou de : '+ contador + ' tentativas')
}

//contar maior numero
//     let maior = chutes[0]
//     for (numero of chutes){
//       if(numero>maior){
//         maior=numero
        
//       }
//     }
//ex3
function ex3(){
const min=1
const max=100
let nEscolhido = Math.floor((Math.random() * max) + min);
acertou=true
let contador=0
let cMax=max
let cMin=min
let chutes = []

while(acertou){
let chute = Math.floor((Math.random() * (cMax-cMin)) + cMin);
console.log('Posso chutar entre :',cMax,'e',cMin)
console.log('Chutei o '+chute)



  if (chute==nEscolhido ){
    console.log('acertou era o '+ nEscolhido)
    acertou=false
    chutes.push(chute)
  }else{
    if(chute>nEscolhido){
    console.log('Mais baixo que '+ chute)
    //     let maior = 0
    // for (numero of chutes){
    //   if(numero>maior){
    //     maior=numero;
    //     }
    //     }
    //cmax=maior
    cMax=chute-1
   
    chutes.push(chute)
    }else {
      console.log('Mais para cima do que ' + chute)
      cMin=chute+1
      chutes.push(chute)
      
    }
  }
  contador++
}
console.log('Voce precisou de : '+ contador + ' tentativas')
console.log('Seus Chutes foram : ' + chutes)

}ex3()
