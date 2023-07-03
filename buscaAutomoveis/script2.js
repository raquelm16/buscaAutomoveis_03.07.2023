

function busca(){
    let cod = document.getElementById("cod")
    let url = "./ceps.json"
    let cidade = document.getElementById("cidade")
    let bairro = document.getElementById("bairro")
    let estado = document.getElementById("estado")
    let pais = document.getElementById("pais")
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for(var cep of data.ceps){
            if(cod.value == cep.codigo){
                cidade.value = cep.cidade
                bairro.value = cep.bairro
                estado.value = cep.estado
                pais.value = cep.cidade
                break
            }
        }
    })
}