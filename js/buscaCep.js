function mascara(j,t){
    let v = j.value;
    if(isNaN(v[v.length-1])){
        j.value = v.substring(0, v.length-1)
        return;
     }
    if(t == "cep"){
        j.setAttribute("maxlength", "9");
        if (v.length == 5) j.value += "-";
     }
 }


const preencherFormCep = (endereco) =>{   
const elemento = endereco
let enderecoFormatado = (`${elemento.logradouro} - ${elemento.bairro}, ${elemento.localidade} - ${elemento.uf}, ${elemento.cep}`)  
const node = document.createElement('li')
const textnode = document.createTextNode(enderecoFormatado)
node.appendChild(textnode)
document.getElementById("result").appendChild(node)
node.removeChild(node)
}

const preencherFormLog = (endereco) =>{    
    for (let i = 0; i < endereco.length; i++) {        
        const elemento = endereco[i];
        let enderecoFormatado = (`${elemento.logradouro} - ${elemento.bairro}, ${elemento.localidade} - ${elemento.uf}, ${elemento.cep}`)  
        const node = document.createElement('li')
        const textnode = document.createTextNode(enderecoFormatado)
        node.appendChild(textnode)
        document.getElementById("result").appendChild(node)
    }
}
const pesquisarCep = async() =>{
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`
    
    // recebendo os dados
    const dados = await fetch(url)
    // pegando os dados e aplicando a função do json
    const endereco = await dados.json();
    preencherFormCep(endereco)
}
const pesquisarLogr = async() =>{
    const uf = document.getElementById('uf').value
    const cidade = document.getElementById('cidade').value
    const logr = document.getElementById('logr').value
    
    const url = `http://viacep.com.br/ws/${uf}/${cidade}/${logr}/json/`
    
    const dados = await fetch(url)
    const endereco = await dados.json();
    preencherFormLog(endereco)
   
   
}

document.getElementById('pesquisarLog').addEventListener('click',pesquisarLogr)
document.getElementById('pesquisarCep').addEventListener('click',pesquisarCep)
