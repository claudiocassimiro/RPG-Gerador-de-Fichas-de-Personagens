function loadData(sheetName) {
    fetch(`/data/${sheetName}`)
        .then(response => response.json())
        .then(data => {
            let content = document.getElementById('content');
            content.innerHTML = JSON.stringify(data); // Substituir por um renderizador adequado
        });
}

function loadInventory() {
    fetch(`/inventory`)
        .then(response => response.json())
        .then(data => {
            let content = document.getElementById('content');
            content.innerHTML = JSON.stringify(data); // Substituir por um renderizador adequado
        });
}
