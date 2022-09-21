import React from 'react'
import PropTypes from 'prop-types'

import { Card, Actions, Button, SliderControl } from './styles'

import { useDataImc } from '../../context/DataImcContext'
import { Feather } from '@expo/vector-icons'
import { rem } from '../../utils/rem'

function ControlCard (props) {
  const { values, setValues } = useDataImc()

  function increment () {
    if (values[props.name] < props.maximumValue) {
      setValues({
        ...values,
        [props.name]: values[props.name] + props.step
      })
    }
  }

  function decrement () {
    if (values[props.name] > props.minimumValue) {
      setValues({
        ...values,
        [props.name]: values[props.name] - props.step
      })
    }
  }

  function onChangeSlider (value) {
    setValues({
      ...values,
      [props.name]: value
    })
  }

  return (
    <Card>
      <Card.Title>{props.title}</Card.Title>
      <Card.Value>{values[props.name].toFixed(props.decimalPlaces)}</Card.Value>

      <Actions>
        <Button onPress={decrement} >
          <Feather name="minus-circle" size={rem(1.8)} color="black" />
        </Button>

        <SliderControl
          minimumValue={props.minimumValue}
          step={props.step}
          value={props.minimumValue}
          maximumValue={props.maximumValue}
          onValueChange={onChangeSlider}
        />

        <Button onPress={increment} >
          <Feather name="plus-circle" size={rem(1.8)} color="black" />
        </Button>
      </Actions>
    </Card>
  )
}

ControlCard.defaultProps = {
  decimalPlaces: 2
}

ControlCard.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  minimumValue: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  decimalPlaces: PropTypes.number
}

export default ControlCard
