
function busca(){
    let carro = document.getElementById("carro").value 
    let marca = document.getElementById("marca")
    let modelo = document.getElementById("modelo")
    let ano = document.getElementById("ano")

    let url = "./automoveis.json"

    fetch(url)
        .then(res => res.json())
        .then(data =>{
            for(var carro of data.automoveis){
                if(carro.value == automoveis.placa){
            marca.value = data.marca
            modelo.value = data.modelo
            ano.value = data.ano
            break
                }
            }
        })
}