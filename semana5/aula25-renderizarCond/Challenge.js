function numero(a,b){
    if(a>b){
        console.log(`   O maior numero é ${a}`)
    }else{
        console.log(`O maior numero é ${b}`)
    }
    console.log(`A diferença é ${a-b}`)
}

function masculino(){
    const nome = 'Augusto'
    const masculino = true
   const ola = masculino ? `Olá , ${nome} 
        Seja bem-vindo a nossa plataforma.
            Estamos felizes em poder recebê-lo.
            Aguarde contato para mais informações.`:  `Olá , ${nome} 
        Seja bem-vinda a nossa plataforma.
            Estamos felizes em poder recebê-la.
            Aguarde contato para mais informações.`
}
masculino()



