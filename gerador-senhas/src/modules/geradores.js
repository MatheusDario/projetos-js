const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]
const simbolos = ',.;~^[]{}!@#$%*()_+=-?'

export default function geraSenha(qnt, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = []
    qnt = Number(qnt)

    for(let i = 0; i < qnt; i++) {
        maiusculas && senhaArray.push(geraMaiuscula())
        minusculas && senhaArray.push(geraMinuscula())
        numeros && senhaArray.push(geraNumero())
        simbolos && senhaArray.push(geraSimbolo())
    }

    const senhaFormatada = senhaArray.join('').slice(0, qnt)

   return senhaFormatada
}


