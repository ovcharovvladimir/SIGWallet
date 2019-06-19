import { Flex, Sp } from './common'
import PropTypes from 'prop-types'
import Banner from './Banner'
import React from 'react'



export default class AltLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
  }

  render() {
    const { children, title } = this.props

    return (
        <section className="formLayer">
        <Banner />

          {title && <h3 >{title}</h3>}
          <Sp mt={2}>{children}</Sp>

        </section>
    )
  }
}
