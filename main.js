const nomes = ["Rodrigo", "Medeiros", "Almeida"]
nomes.push("Bonfim")
const lista = document.getElementById("lista")

for (let nome of nomes){
    lista.innerHTML += `<li>${nome}</li>`  
}