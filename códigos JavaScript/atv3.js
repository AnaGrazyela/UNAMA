let valor = 0; 
const contador = document.getElementById("contador");
const btnAumentar = document.getElementById("aumentar");
const btnDiminuir = document.getElementById("diminuir");

btnAumentar.addEventListener("click", function() {
    valor++;
    contador.textContent = "Contador: " + valor;
});

btnDiminuir.addEventListener("click", function() {
    valor--;
    contador.textContent = "Contador: " + valor;
});
