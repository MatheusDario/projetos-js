function main() {
    const form = document.querySelector('#form')
    let resposta = document.querySelector('#res')
    
    function recebeEventoForm(evento) {
        evento.preventDefault();
        let txtPeso = document.querySelector('#txtPeso')
        let txtAltura = document.querySelector('#txtAltura')
        let imc = Number(txtPeso.value) / (Number(txtAltura.value) * Number(txtAltura.value))

        if ((txtPeso.value.length === 0 || txtAltura.value.length === 0) || (isNaN(txtPeso.value)) || (isNaN(txtAltura.value))) {
            resposta.innerHTML = `<p id="err">Valor inserido é inválido, por favor, verifique. </p>`
        } else {
            
            if (imc < 18.5) {
                resposta.innerHTML = `<p> Seu peso é ${txtPeso.value} Kg, e seu IMC: ${imc.toFixed(2)}, você está Abaixo do Peso !!</p>`
            } else if (imc <= 24.9) {
                resposta.innerHTML = `<p> Seu peso é ${txtPeso.value} Kg, e seu IMC: ${imc.toFixed(2)}, Peso normal</p>`
            } else if (imc <= 29.9) {
                resposta.innerHTML = `<p> Seu peso é ${txtPeso.value} Kg, e seu IMC: ${imc.toFixed(2)}, Sobrepeso</p>`
            } else if (imc <= 34.9) {
                resposta.innerHTML = `<p> Seu peso é ${txtPeso.value} Kg, e seu IMC: ${imc.toFixed(2)}, Obesidade grau I !!</p>`
            } else if (imc <= 39.9) {
                resposta.innerHTML = `<p> Seu peso é ${txtPeso.value} Kg, e seu IMC: ${imc.toFixed(2)}, Obesidade grau II !!</p>`
            }  else {
                resposta.innerHTML = `<p> Seu peso é ${txtPeso.value} Kg, e seu IMC: ${imc.toFixed(2)}, Obesidade grau III !!</p>`
            }
        }

        txtPeso.value = ''
        txtAltura.value = ''
    }
    form.addEventListener('submit', recebeEventoForm)
    resposta.innerHTML = ''
}
main()
