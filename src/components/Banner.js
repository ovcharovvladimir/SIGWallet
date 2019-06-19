import React from 'react'

export default class Banner extends React.Component {
  render() {
    return (

        <img src={process.env.PUBLIC_URL + '/images/logo.svg' } alt="logo" className="logo"/>

    )
  }
}
