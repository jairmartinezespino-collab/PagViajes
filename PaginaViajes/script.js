function calcularDiario() {
    // Obtenemos los valores de los inputs
    const presupuesto = document.getElementById('totalBudget').value;
    const dias = document.getElementById('totalDays').value;
    const campoResultado = document.getElementById('resultado');

    // Validación básica
    if (presupuesto > 0 && dias > 0) {
        const diario = (presupuesto / dias).toFixed(0); // Calculamos y redondeamos a 2 decimales
        
        // Mostramos el resultado con un mensaje persuasivo
        campoResultado.innerHTML = `Tu presupuesto es de <strong>$${diario}</strong> por día. <br> <small></small>`;
    } else {
        campoResultado.innerHTML = "Por favor, ingresa valores válidos.";
        campoResultado.style.color = "red";
    }
}