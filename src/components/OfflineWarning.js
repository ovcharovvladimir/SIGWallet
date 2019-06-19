import * as selectors from '../selectors'
import { connect } from 'react-redux'
import { BaseBtn, CloseIcon } from './common'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 3;
  left: 0;
  width: 100%;
  padding: 26px 16px;
  background: #df4542;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #fff;
`

const DismissBtn = BaseBtn.extend`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px
`

class OfflineWarning extends React.Component {
  static propTypes = {
    isOnline: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isVisible: !props.isOnline
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isOnline) {
      this.setState({ isVisible: false })
    } else if (newProps.isOnline !== this.props.isOnline) {
      this.setState({ isVisible: true })
    }
  }

  onDismissClick = () => this.setState({ isVisible: false })

  render() {
    const { isVisible } = this.state

    return (
      isVisible && (
        <Container>
          No internet connection. Please check your settings.{' '}
          <DismissBtn onClick={this.onDismissClick}>
            <CloseIcon  width="24px" height="24px" viewBox="0 0 24 24"/>
          </DismissBtn>
        </Container>
      )
    )
  }
}

const mapStateToProps = state => ({
  isOnline: selectors.getIsOnline(state)
})

export default connect(mapStateToProps)(OfflineWarning)
