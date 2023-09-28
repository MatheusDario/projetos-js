const input = document.querySelector('.btn')
input.addEventListener('click', function () {
    const cpfDigitado = document.querySelector('.cpf')
    const resposta = document.querySelector('.resposta')

    function ValidaCpf(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function () {
                return cpfEnviado.replace(/\D+/g, '')
            }
        })
    }
    
    ValidaCpf.prototype.valida = function () {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false
        if (this.isSequencia()) return false
    
        const cpfParcial = this.cpfLimpo.slice(0, 9)
        const digito1 = this.criaDigito(cpfParcial)
        const digito2 = this.criaDigito(cpfParcial + digito1)
    
        const novoCpf = cpfParcial + digito1 + digito2
    
        return novoCpf === this.cpfLimpo
    }
    
    ValidaCpf.prototype.criaDigito = function (cpfParcial) {
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfArray.length + 1
        const total = cpfArray.reduce((acumu, valor) => {
            acumu += Number(valor) * regressivo
            regressivo--
            return acumu
        }, 0)
    
        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito);
    }
    
    ValidaCpf.prototype.isSequencia = function () {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }
    
    const cpf = new ValidaCpf(cpfDigitado.value)
    
    if (cpf.valida()) {
        resposta.classList.add('valido')
        resposta.innerHTML = `<p>CPF Válido</p>`
    } else {
        resposta.classList.add('invalido')
        resposta.innerHTML = `<p>CPF Inválido</p>`
    }
})



