import colors from '../styles/colors'

export default function calculateIMC({ weight, height }) {
  const imc = weight / (height * height)
  const message = {}

  if (imc < 18.5) {
    message.situation = 'Abaixo do peso'
    message.color = colors.attentionColor
  } else if (imc >= 18.5 && imc < 24.9) {
    message.situation = 'Peso normal'
    message.color = colors.healthyColor
  } else if (imc >= 25 && imc < 29.9) {
    message.situation = 'Sobrepeso'
    message.color = colors.attentionColor
  } else if (imc >= 30 && imc < 34.9) {
    message.complement = 'com'
    message.situation = 'obesidade grau I'
    message.color = colors.dangerColor
  } else if (imc >= 35 && imc < 39.9) {
    message.complement = 'com'
    message.situation = 'obesidade grau II'
    message.color = colors.dangerColor
  } else if (imc >= 40) {
    message.complement = 'com'
    message.situation = 'obesidade grau III ou mórbida'
    message.color = colors.dangerColor
  }

  message.imc = imc.toFixed(2)

  return message
}
