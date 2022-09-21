import React from 'react'
import { Box, Button } from 'native-base'

import Header from '../components/Header'
import ControlCard from '../components/ControlCard'
import ResultCard from '../components/ResultCard'

import { useDataImc } from '../context/DataImcContext'


export function HomeScreen () {
  const { calculateImc } = useDataImc()

  return (
    <Box flex={1} backgroundColor={"background.primary"}>

      <Header />

      <Box flex={1} px="3" py="1" justifyContent={"space-evenly"} >
        <ResultCard />

        <ControlCard
          title="Peso (kg)"
          minimumValue={15.0}
          maximumValue={150.0}
          step={0.1}
          name="weight"
          decimalPlaces={1}
        />

        <ControlCard
          title="Altura (m)"
          minimumValue={0.5}
          maximumValue={2.3}
          step={0.01}
          name="height"
        />        

        <Button
          onPress={calculateImc}
          size={"lg"}
          backgroundColor={"brand.primary"}
          _text={{
            color: 'neutral.black',
          }}
        >
          CALCULAR
        </Button>
      </Box>
    </Box>
  )
}