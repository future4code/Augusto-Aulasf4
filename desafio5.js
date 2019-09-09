  //desafio1
  
  //const jogador = prompt('Ola! Qual nome de quem ousa me desafiar?')
  function comprarCarta() {
    // Cria array de cartas
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    // Cria array de naipes
    const naipes = ["♦️", "♥️", "♣️", "♠️"]
  
    // Sorteia uma carta
    const numero = cartas[Math.floor(Math.random() * 13)]
  
    // Sorteia um naipe
    const naipe = naipes[Math.floor(Math.random() * 4)]
  
    let valor
  
    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
    if (numero === "A") {
      valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
      valor = Number(numero)
    }
  
    // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
    const carta = {
      texto: numero + naipe,
      valor: valor
    }
    return carta
  }
 
    const mao = []
    //sorteia as duas cartas iniciais
    for(i=0;i<2;i++){
    comprarCarta()
    mao.push(comprarCarta())
    }

    const maoPc = []
    //sorteia as duas cartas iniciais
    for(i=0;i<2;i++){
    comprarCarta()
    maoPc.push(comprarCarta())
    }

  rodada=confirm('Quer comecar uma nova rodada?')
  if(rodada==true){
  console.log('Bem Vindo ao jogo de BlackJack!')

    const soma=mao[0].valor+mao[1].valor
    const somaPc = maoPc[0].valor+maoPc[1].valor
    console.log('Sua mao inicial :',mao[0].texto,'e',mao[1].texto,'- pontuacao :',soma)
    console.log('mao inicial do computador :',maoPc[0].texto,'e',maoPc[1].texto,'- pontuacao :',somaPc)

      
      if(soma>somaPc){
        console.log('Parabens voce ganhou!')
      }else if(soma<somaPc){
        console.log('Computador Ganhou!')
      }else{
        console.log('Empate!')
      }
  }else{
    console.log('O jogo acabou!')
  }

//desafio 2

  //const jogador = prompt('Ola! Qual nome de quem ousa me desafiar?')
  function comprarCarta() {
    // Cria array de cartas
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    // Cria array de naipes
    const naipes = ["♦️", "♥️", "♣️", "♠️"]
  
    // Sorteia uma carta
    const numero = cartas[Math.floor(Math.random() * 13)]
  
    // Sorteia um naipe
    const naipe = naipes[Math.floor(Math.random() * 4)]
  
    let valor
  
    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
    if (numero === "A") {
      valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
      valor = Number(numero)
    }
  
    // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
    const carta = {
      numero: numero,
      texto: numero + naipe,
      valor: valor
    }
    return carta
  }


  
    const maoValor=[]
    const maoTexto = []
    const mao = []
    
    //sorteia as duas cartas iniciais
    for(i=0;i<2;i++){
    comprarCarta()
    mao.push(comprarCarta())
    maoValor.push(mao[i].valor)
    maoTexto.push(mao[i].texto)
    }

    const maoPc = []
    const maoPcValor=[]
    const maoPcTexto = []
    //sorteia as duas cartas iniciais
    for(i=0;i<2;i++){
    comprarCarta()
    maoPc.push(comprarCarta())
    maoPcValor.push(maoPc[i].valor)
    maoPcTexto.push(maoPc[i].texto)
    }

   
  rodada=confirm('Quer comecar uma nova rodada?')

  if(rodada==true){
  console.log('Bem Vindo ao jogo de BlackJack!')
    if(mao[0].numero && mao[1].numero==="A"){
    const maoValor=[]
    const maoTexto = []
    const mao = []
    //sorteia as duas cartas iniciais
      for(i=0;i<2;i++){
      comprarCarta()
      mao.push(comprarCarta())
      maoValor.push(mao[i].valor)
      maoTexto.push(mao[i].texto)
      
      }
    }else if (maoPc[0].numero && maoPc[1].numero==="A"){
      const maoPc = []
      const maoPcValor=[]
      const maoPcTexto = []
    //sorteia as duas cartas iniciais
    for(i=0;i<2;i++){
    comprarCarta()
    maoPc.push(comprarCarta())
    maoPcValor.push(maoPc[i].valor)
    maoPcTexto.push(maoPc[i].texto)
    }
    }

    function soma(){
      let soma=0
      for (let cartaAtual of maoValor){
        soma=cartaAtual+soma
        
      }return soma
    }
        function somaPc(){
      let somaPc=0
      for (let cartaAtual of maoPcValor){
        somaPc=cartaAtual+somaPc
        
      }return somaPc
    }
  
    alert('Sua mao inicial :'+maoTexto+'- pontuacao :'+soma()+', primeira carta do Computador :'+maoPcTexto[0],)

    
    let comprando = true
//comeca o loop de comprar cartas enquanto true
    while (comprando){
      let comprar = confirm('Gostaria de mais alguma carta?')
      // Se quiser mais cartas 
      if  (comprar){
        //compra as cartas
        comprarCarta()
        mao.push(comprarCarta())
        let ind=mao.length-1
        maoValor.push(mao[ind].valor)
        maoTexto.push(mao[ind].texto)
        //caso passe de 21 ao comprar
        if(soma()>21){
          alert('Voce Perdeu o jogo pois estourou os 21 pontos, pontuacao : '+soma()+' o pc fez :'+somaPc())
          //para de poder comprar
         comprando = false
        }
        alert('Sua mao agora e :'+ maoTexto +"pontuacao : "+soma())  
    
      }else{
        while(somaPc()<soma()){
          comprarCarta()
        maoPc.push(comprarCarta())
        const inde = maoPc.length-1
        maoPcValor.push(maoPc[inde].valor)
        maoPcTexto.push(maoPc[inde].texto)
        }
        if(somaPc()>21){
          alert('Voce venceu o computador, pois ele estourou os 21 pontos! Sua pontuacao foi :'+soma()+"e a dele : "+somaPc())
         
        }
        else if(soma()>somaPc()){
          alert('Voce venceu o computador! Sua pontuacao foi :'+soma()+"e a dele : "+somaPc())
          
        }else if (soma()===somaPc()){
          alert('Voces empataram com : '+soma()+' pontos!')
         
        }else if(soma()<somaPc() && somaPc()<22){
          alert('Computador te ganhou com :'+somaPc()+'e voce com terminou com : '+soma())
         
        }else{
          alert('Voce venceu o computador! Sua pontuacao foi :'+soma()+"e a dele : "+somaPc())
          
          }
      
          comprando = false
      }
    }

    console.log(' Suas cartas '+maoTexto+' totalizando '+soma()+' pontos')
    console.log(' As cartas do computador foram '+maoPcTexto+' totalizando '+somaPc()+' pontos')

        
  }else{     
    console.log('O jogo acabou!')
  }

//desafio 3

  //const jogador = prompt('Ola! Qual nome de quem ousa me desafiar?')
  let derrota = 0;
  let empate = 0;
  let vitoria = 0;
  const estrategia = 12;//ate qual pontuacao ainda comprar uma carta

for (let voltas=0;voltas<1000;voltas++){

function comprarCarta() {
  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    numero: numero,
    texto: numero + naipe,
    valor: valor
  }
  return carta
}

function guardaCarta(i){
  comprarCarta();
  mao.push(comprarCarta());
  maoValor.push(mao[i].valor);
  maoTexto.push(mao[i].texto);
  }

function PcguardaCarta(i){
  comprarCarta()
  maoPc.push(comprarCarta())
  maoPcValor.push(maoPc[i].valor)
  maoPcTexto.push(maoPc[i].texto)
}

function soma(){
  let soma=0
  for (let cartaAtual of maoValor){
  soma=cartaAtual+soma     
    }return soma
  }

function somaPc(){
  let somaPc=0
  for (let cartaAtual of maoPcValor){
  somaPc=cartaAtual+somaPc    
    }return somaPc
  }

  const maoValor=[]
  const maoTexto = []
  const mao = []
  
  //sorteia as duas cartas iniciais
  for(i=0;i<2;i++){
    guardaCarta(i)
  }

  const maoPc = []
  const maoPcValor=[]
  const maoPcTexto = []
  //sorteia as duas cartas iniciais
  for(i=0;i<2;i++){
    PcguardaCarta(i)
  }

  //enquanto o valor da mao for 2 A troca.
  if (mao[0].numero=="A" && mao[1].numero=="A") {
  const maoValor=[]
  const maoTexto = []
  const mao = []
  //sorteia as duas cartas iniciais
    for(i=0;i<2;i++){
      guardaCarta(i)
    
    }
  }
  if (maoPc[0].numero && maoPc[1].numero==="A"){
    const maoPc = []
    const maoPcValor=[]
    const maoPcTexto = []
  //sorteia as duas cartas iniciais
  for(i=0;i<2;i++){
    PcguardaCarta(i)
  }
  }
  

  //compra carta enquanto a pontuacao for menor do que a estrategia estipulada
    while(soma()<=estrategia){
      comprarCarta()
      mao.push(comprarCarta())
      let ind=mao.length-1
      maoValor.push(mao[ind].valor)
      maoTexto.push(mao[ind].texto)
    }
    
    //se pontos do pc for menor do q da pessoa e o da pessoa for menor do que 21, compra uma carta
      while((somaPc()<soma()) && (soma()<21)){
        comprarCarta()
      maoPc.push(comprarCarta())
      const inde = maoPc.length-1
      maoPcValor.push(maoPc[inde].valor)
      maoPcTexto.push(maoPc[inde].texto)
      }


    
    
  if(soma()>21 && somaPc()>21){
        empate++
      }
      else if(soma()>21 && somaPc()<=21){
        derrota++
      }else if(somaPc()>21 && soma()<=21){
        vitoria++ 
      }else if(soma()>somaPc()){ 
        vitoria++
      }else if(soma()<somaPc()){ 
        derrota++ 
      }else if (soma()===somaPc()){ 
        empate++ 
      }else{
        vitoria++
      }
}
  console.log('Vitoria : '+vitoria)
  console.log('Derrotas : '+derrota)
  console.log('Empates : '+empate)