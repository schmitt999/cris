// script.js
console.log("Página do Festival da Carne carregada!");

// Você pode adicionar interatividade com JavaScript aqui, se necessário.
// Por exemplo, para atualizar a data dinamicamente:
document.addEventListener('DOMContentLoaded', function() {
    const dataElement = document.querySelector('.info p:first-child');
    if (dataElement) {
        const dataDoEvento = "30 de Agosto de 2025"; // Exemplo de data
        dataElement.textContent = `Data: ${dataDoEvento}`;
    }
});