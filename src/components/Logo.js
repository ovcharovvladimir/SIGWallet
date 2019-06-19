import styled from 'styled-components'
import React from 'react'




export default class Logo extends React.Component {
  render() {
    return (
        <img src={process.env.PUBLIC_URL + '/images/logo.svg' } alt="logo" className="logo"/>
    )
  }
}
