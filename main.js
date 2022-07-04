const calcularTotales = (pago, horasTrabajadas) => {
    if (horasTrabajadas <= 0) {
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de pago es: ${totalPago}. El total a pagar es: ${
            totalPago + totalPagoExtra
        }`;
    } else {
        let totalPago = horasTrabajadas * pago;
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de pago es: ${totalPago}`;
    }
};

document.querySelector("#pro_calc").addEventListener("click", (e) => {
    e.preventDefault();
    let horasTrabajadas = +document.querySelector("#horas_trabajadas").value;
    let pago = +document.querySelector("#precio_hora").value;
    calcularTotales(pago, horasTrabajadas);
});
