import React from 'react'

import { Wrapper, Title, Void, Button } from './styles'

import { useDataImc } from '../../context/DataImcContext'
import { FontAwesome5 } from '@expo/vector-icons'
import { rem } from '../../utils/rem'

function Header () {
  const { clearResult } = useDataImc()

  return (
    <Wrapper>
      <Void />

      <Title>Calculadora IMC</Title>

      <Button onPress={clearResult}>
        <FontAwesome5 name="eraser" size={rem(1.8)} color="white" />
      </Button>
    </Wrapper>
  )
}

export default Header
