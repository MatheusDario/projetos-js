function main() {
    const form = document.querySelector('#form')
  
    function recebeEventoForm(evento) {
        evento.preventDefault();
        let txtPeso = document.querySelector('#txtPeso')
        let txtAltura = document.querySelector('#txtAltura')
        const peso = Number(txtPeso.value)
        const altura = Number(txtAltura.value)

        if (!peso) {
            setResultado('Peso inválido', false)
            return
         }

         if(!altura) {
            setResultado('Altura inválida', false) 
            return 
        } 
        
        const imc = getImc(peso, altura)
        const nivelImc = getNivelImc(imc)

        const msg = `Seu IMC é ${imc} (${nivelImc}). `

        setResultado(msg, true);

        function getNivelImc(imc) {
            const nivel = [
            'Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau I', 
            'Obesidade Grau II', 'Obesidade grau III']
            if (imc < 18.5) {
               return nivel[0]
            } else if (imc <= 24.9) {
                return nivel[1]
            } else if (imc <= 29.9) {
                return nivel[2]
            } else if (imc <= 34.9) {
                return nivel[3]
            }  else if(imc <= 39.9) {
                return nivel[4]
            } else {
                return nivel[5]
            }     
        }
        
        function getImc(peso, altura) {
            let imc = peso / (altura * altura)
            return imc.toFixed(2)
        }

        function criaP() {
            const p = document.createElement('p')
            return p
        }

        function setResultado (msg, isValid) {
            const resultado = document.querySelector('#res');
            resultado.innerHTML = '';
          
            const p = criaP();
          
            if (isValid) {
              p.classList.add('ok');
            } else {
              p.classList.add('err');
            }
          
            p.innerHTML = msg;
            resultado.appendChild(p);
          }
    }
    form.addEventListener('submit', recebeEventoForm)
}
main()
