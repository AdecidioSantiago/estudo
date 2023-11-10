const frm = document.querySelector('form')        //obtém elementos da página
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

let resposta = ''  //string com a resposta a ser exibida
let numContas = 0  //inicializa contador...
let valTotal = 0   //e acumulador (variável global)

frm.addEventListener('submit', (e) => {   //"escuta" evento submit do form
    e.preventDefault()    //evita envio do form

    const descricao = frm.inDescricao.value    //obtém os dados da conta
    const valor = Number(frm.inValor.value)

    numContas++       //adiciona valores ao contador e acumulador
    valTotal += valor
    resposta = resposta + descricao + ' - R$: ' + valor.toFixed(2) + '\n'
    resp1.innerHTML = `${resposta}--------------------------`
    resp2.innerHTML = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ''   //limpa campos do form
    frm.inValor.value = ''
    frm.inDescricao.focus()      //posiciona no com inDescricao do form
})