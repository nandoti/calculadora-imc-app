import React from 'react'

import LottieView from 'lottie-react-native'

import { Card, SmallText, BigText, MediumText } from './styles'

import colors from '../../styles/colors'
import { useDataImc } from '../../context/DataImcContext'

const ResultCard = () => {
  const { waiting, data } = useDataImc()

  return (
    <>
      {waiting && (
        <Card>
          <SmallText color={colors.whiteColor}>AGUARDANDO INFORMAÇÕES</SmallText>
          <LottieView
            source={require('../../assets/lottie/loading.json')}
            autoPlay
            loop
            style={{ width: 120 }}
          />
        </Card>
      )}

      {!waiting && (
        <Card>
          <SmallText color={colors.whiteColor}>VOCÊ ESTÁ{data.complement && ' com'}</SmallText>
          <BigText color={data.color}>{data.situation}</BigText>
          <SmallText color={colors.whiteColor}>SEU IMC É</SmallText>
          <MediumText color={data.color}>{data.imc}</MediumText>
        </Card>
      )}
    </>
  )
}

export default ResultCard
