//ternario
Numero % 2===0 ? console.log("par"): console.log("ímpar")
// Coding together
//verifica se o numero escolhido e par ou impar
function treino1(){
let numero=Number(prompt('informe um numero?'));

if (numero%2==0){
  console.log('par');
}else{
  console.log(`impar`);
}
}
// Coding together
// verifica se o ano e bissexto
function treino2(){
	let ano=Number(prompt('informe um ano?'));
  
  if (ano%4===0){
	console.log('bissexto');
	if(ano%100===0){
	  console.log('nao e bissexto');
	  if(ano%400===0){
		console.log('bissexto');
  }
  }
  }else{
	 console.log('nao e bissexto');
  }
  } 
//ou
let anoInformado=Number(prompt('informe um ano?'));
if(anoInformado % 400 === 0){
	console.log('é bissexto')
  } else if(anoInformado % 4 === 0) {
	if(anoInformado % 100 > 0) {
	  console.log('é bissexto')
	} else {
	  console.log('nao é bissexto')
	}
  } else {
	console.log('nao é bissexto')
  }  
  //coloca em ordem crescente numeros
function exe1a(){
  let numero1 = Number(prompt('informe o primeiro numero'))
  let numero2 = Number(prompt('informe um segundo numero(diferente do primeiro)'))

  if (numero1===numero2){
    console.log('Erro, informe valores diferentes,')
  }else{
    if(numero1>numero2){
      console.log(numero1,numero2)
    }else{
      console.log(numero2,numero1)
    }
  }
}

//colocar em ordem crescente 3 nuemros
function exe1b(){
  let numero1 = Number(prompt('informe o primeiro numero'))
  let numero2 = Number(prompt('informe um segundo numero(diferente do primeiro)'))
  let numero3 = Number(prompt('informe um terceiro numero(diferente do segundo)'))

  if (numero1===numero2 || numero1===numero3 || numero2===numero3){
    console.log('Erro, informe valores diferentes,')
  }else{
    if(numero1>numero2 && numero1>numero3){
      console.log(numero1)
      if(numero2>numero3){
        console.log(numero2)
        console.log(numero3)
      }else{
           console.log(numero3)
        console.log(numero2)
      }
    }else if(numero2>numero1 && numero2>numero3){
      console.log(numero2)
      if(numero1>numero3){
        console.log(numero1)
        console.log(numero3)
      }else{
           console.log(numero3)
        console.log(numero1)
      }
    }
    else if(numero3>numero1 && numero3>numero2){
      console.log(numero3)
      if(numero2>numero1){
        console.log(numero2)
        console.log(numero1)
      }else{
           console.log(numero1)
        console.log(numero2)
      }
    }
  }
}exe1b()

//cria um fluxograma para descobrir o animal pensado
function ex2a(){
let corpoEstranho = prompt('escolha um animal(sem ser galinha kkk)')

let pergunta1 = confirm('E um animal?')
if(pergunta1===true){
  let pergunta2 = confirm('Tem pelo?')
  if(pergunta2===true){
    let pergunta3 = confirm('Late?')
    if (pergunta3===true){
      console.log('E um cachorro.')
    }else{
      console.log('E um gato.')
    }
  }else{
    let pergunta4 = confirm('Voa?')
    if (pergunta4===true){
      console.log('E um passaro.')
    }else{
      console.log('E um peixe.')
    }
  }
}else{
  console.log('E uma pedra.')
}
}

//anterior melhorado com mais itens
function ex2b(){
let corpoEstranho = prompt('escolha um animal(sem ser galinha kkk)')

let pergunta1 = confirm('E um animal?')
if(pergunta1===true){
  let pergunta2 = confirm('Tem pelo?')
  if(pergunta2===true){
    let pergunta3 = confirm('Late?')
    if (pergunta3===true){
      console.log('E um cachorro.')
    }else{
      let pergunta7 = confirm('E um roedor?')
  if (pergunta7===true){
      console.log('E um rato.')
    }else{
      console.log('E um gato.')
    }
    }
  }else{
    let pergunta4 = confirm('Voa?')
    if (pergunta4===true){
      console.log('E um passaro.')
    }else{
      console.log('E um peixe.')
    }
  }
}else{
  let pergunta5 = confirm('E um ser vivo?')
  if (pergunta5===true){
      let pergunta6 = confirm('Anfibio?')
      if (pergunta6===true){
        console.log('E um Sapo.')
      }else{
        console.log('E uma planta.')
    }
    }else{
      console.log('E uma pedra.')
    }
}
}


//esquema para compra de bilhete com impressao de cupom
function ex3(){
  const cotacao = 4.1
	let nome = prompt('Informe seu nome completo por favor.')
	let tipoJogo = prompt('Jogo Nacional (NA) ou Internacional (IN)? (digitar a sigla)')
	if (tipoJogo==='IN'){
	  tipoJogo='Internacional'
	}else if(tipoJogo==='NA'){
	  tipoJogo='Nacional'}
	if(tipoJogo==='Nacional'){
	  let jogo = prompt('Digite a sigla em maiusculo, SF - Semifinais, DT - Decisao do 3 lugar, FI - Final')
    if (jogo==='SF'){jogo='Semifinais'}
    else if (jogo==='DT'){jogo='Decisao do 3 lugar'}
    else if (jogo==='FI'){jogo='Final'}
	  if (jogo==='semifinais'){
		let categoria= Number(prompt ('Qual Categoria? 1,2,3 ou 4'))
		if(categoria===1){
      let valor = 1320
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else if(categoria===2){
			let valor = 880
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else if(categoria===3){
			let valor = 550
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else if(categoria===4){
			let valor = 220
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else{
		  console.log('Categoria Inexistente')
		}
	  }
	  else if (jogo==='Decisao do 3 lugar'){
		let categoria= Number(prompt ('Qual Categoria? 1,2,3 ou 4'))
		if(categoria===1){
      let valor = 660
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else if(categoria===2){
			let valor = 440
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else if(categoria===3){
			let valor = 330
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else if(categoria===4){
			let valor = 170
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else{
		  console.log('Categoria Inexistente')
		}
	  }
	  else if (jogo==='Final'){
		let categoria= Number(prompt ('Qual Categoria? 1,2,3 ou 4'))
		if(categoria===1){
      let valor = 1980
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else if(categoria===2){
			let valor = 1320
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else if(categoria===3){
			let valor = 880
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else if(categoria===4){
			let valor = 330
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra : R$'+ total+',00')
		}
		else{
     
		  console.log('Categoria Inexistente')
		}
	  }
	  else{
  
		console.log('Por Favor verifique se digitou a sigla corretamente.')
	  }
  
	}else if (tipoJogo==='Internacional'){
  	  let jogo = prompt('Digite a sigla em maiusculo, SF - Semifinais, DT - Decisao do 3 lugar, FI - Final')
    if (jogo==='SF'){jogo='Semifinais'}
    else if (jogo==='DT'){jogo='Decisao do 3 lugar'}
    else if (jogo==='FI'){jogo='Final'}
	  if (jogo==='semifinais'){
		let categoria= Number(prompt ('Qual Categoria? 1,2,3 ou 4'))
		if(categoria===1){
      let valor = 1320
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
	  	console.log('---Dados da compra---')
  		console.log('Nome do cliente : '+ nome)
	  	console.log('Tipo de Jogo : '+ tipoJogo)
	  	console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      console.log('---Valores---')
      console.log('Valor do Ingresso : US$'+ valorUs +',00')
      console.log('Valor do Ingresso : R$'+ valor +',00')
      console.log('Valor total da compra em R$ :'+ total +',00')
      console.log('Valor total da compra em US$ :'+ totalUs +',00')
		}
		else if(categoria===2){
			let valor = 880
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
        console.log('Valor do Ingresso : US$'+ valorUs+',00')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra em R$ :'+ total+',00')
        console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else if(categoria===3){
			let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
        console.log('Valor do Ingresso : US$'+ valorUs+',00')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra em R$ :'+ total+',00')
        console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else if(categoria===4){
			let valor = 220
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		  console.log('---Dados da compra---')
	    console.log('Nome do cliente : '+ nome)
		  console.log('Tipo de Jogo : '+ tipoJogo)
		  console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      console.log('---Valores---')
      console.log('Valor do Ingresso : US$'+ valorUs+',00')
      console.log('Valor do Ingresso : R$'+ valor+',00')
      console.log('Valor total da compra em R$ :'+ total+',00')
      console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else{
		  console.log('Categoria Inexistente')
		}
	  }
	  else if (jogo==='Decisao do 3 lugar'){
		let categoria= Number(prompt ('Qual Categoria? 1,2,3 ou 4'))
		if(categoria===1){
      let valor = 660
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
        console.log('Valor do Ingresso : US$'+ valorUs+',00')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra em R$ :'+ total+',00')
        console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else if(categoria===2){
			let valor = 440
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
        console.log('Valor do Ingresso : US$'+ valorUs+',00')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra em R$ :'+ total+',00')
        console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else if(categoria===3){
			let valor = 330
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
        console.log('Valor do Ingresso : US$'+ valorUs+',00')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra em R$ :'+ total+',00')
        console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else if(categoria===4){
			let valor = 170
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
        console.log('Valor do Ingresso : US$'+ valorUs+',00')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra em R$ :'+ total+',00')
        console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else{
		  console.log('Categoria Inexistente')
		}
	  }
	  else if (jogo==='Final'){
		let categoria= Number(prompt ('Qual Categoria? 1,2,3 ou 4'))
		if(categoria===1){
      let valor = 1980
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
        console.log('Valor do Ingresso : US$'+ valorUs+',00')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra em R$ :'+ total+',00')
        console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else if(categoria===2){
			let valor = 1320
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
        console.log('Valor do Ingresso : US$'+ valorUs+',00')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra em R$ :'+ total+',00')
        console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else if(categoria===3){
			let valor = 880
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
        console.log('Valor do Ingresso : US$'+ valorUs+',00')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra em R$ :'+ total+',00')
        console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else if(categoria===4){
			let valor = 330
      let valorUs = valor/cotacao
      let quantos = Number(prompt('Quantos ingressos?'))
      let total= quantos*valor
      let totalUs = total/cotacao
		console.log('---Dados da compra---')
		console.log('Nome do cliente : '+ nome)
		console.log('Tipo de Jogo : '+ tipoJogo)
		console.log('Etapa do Jogo : '+ jogo)
    	console.log('Categoria : '+ categoria)
     	console.log('Quantidade de Ingressos : '+ quantos)
      	console.log('---Valores---')
        console.log('Valor do Ingresso : US$'+ valorUs+',00')
      	console.log('Valor do Ingresso : R$'+ valor+',00')
      	console.log('Valor total da compra em R$ :'+ total+',00')
        console.log('Valor total da compra em US$ :'+ totalUs+',00')
		}
		else{
     
		  console.log('Categoria Inexistente')
		}
	  }
	  else{
  
		console.log('Por Favor verifique se digitou a sigla corretamente.')
	  }
  
	}
  else{
	console.log('Por Favor verifique se digitou a sigla corretamente.')
  }}
 