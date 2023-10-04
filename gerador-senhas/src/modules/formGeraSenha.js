import geraSenha from "./geradores";

export default () => {
    const qntCaracteres = document.querySelector('.qnt')
    const chkMaiusculas = document.querySelector('.chk-maiusculas')
    const chkMinusculas = document.querySelector('.chk-minusculas')
    const chkNumeros = document.querySelector('.chk-numeros')
    const chkSimbolos = document.querySelector('.chk-simbolos')
    const btnGeraSenha = document.querySelector('.gera-senha')
    const senhaGerada = document.querySelector('.senha-gerada')

    btnGeraSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })

    function gera() {
        const senha = geraSenha(qntCaracteres.value,
            chkMaiusculas.checked,
            chkMinusculas.checked,
            chkNumeros.checked,
            chkSimbolos.checked)

            return senha || 'Nada Selecionado'
    }

}