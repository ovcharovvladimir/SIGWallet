import { DarkLayout, Btn, Sp, TextInput, Flex } from './common'
import { validateMnemonic } from '../validator'
import DashboardHeader from './DashboardHeader'
import { withRouter } from 'react-router-dom'

import * as utils from '../utils'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'


const Confirmation = styled.div`
  color: ${p => p.theme.colors.danger};
  background-color: ${p => p.theme.colors.darkShade};
  border-radius: 4px;
  padding: 0.8rem 1.6rem;
`
const ValidationMsg = styled.div`
  font-size: 1.4rem;
  margin-left: 1.6rem;
  opacity: 0.75;
`
const Container = styled.div`
  background-color: ${p => p.theme.colors.bg.primary};
  padding: 0 2.4rem 2.4rem;
  min-height: 100%;
  position: relative;

  @media (min-width: 800px) {
    padding: 0 4.8rem 4.8rem;
  }
`
const FixedContainer = styled.div`
  background-color: ${p => p.theme.colors.bg.primary};
  position: sticky;
  padding: 0 1.6rem;
  margin: 0 -1.6rem;
  z-index: 2;
  right: 0;
  left: 0;
  top: 0;
`
class Mining extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  }

  state = {
    activeModal: null,
    mnemonic: null,
    errors: {}
  }

  render() {
    return (
      <div class="container" data-testid="dashboard-container">
        <FixedContainer>
          <DashboardHeader />
        </FixedContainer>
        <div class="container">
          <div class="mining">
            <div class="mining__content">
              <div class="mining__cpu">
                <h4>CPU (PoW) Mining</h4>
                <span>Not connected</span>
                <a href="" class="controlBtn">Start</a>
                <div class="progress">
                  <div class="progress__head">
                    <p>CPU</p>
                    <span>25 Ghz (0% used)</span>
                  </div>
                  <div class="progress__bar"></div>
                </div>
              </div>
              <div class="mining__node">
                <h4>Masternode Minting</h4>
                <span>Deposit $2000 (500 SIG) or more to start minting</span>
                <a href="" class="controlBtn">Start</a>
              </div>
            </div>
            <ul class="mining__data">
              <li>
                <span>Last 24h</span>
                <p><span>0.99341</span> SIG</p>
              </li>
              <li>
                <span>Last Month</span>
                <p><span>58.04531</span> SIG</p>
              </li>
              <li>
                <span>Total Revenue</span>
                <p><span>185.00937</span> SIG</p>
              </li>
              <li>
                <span>Connected Nodes</span>
                <p><span>121</span></p>
              </li>
              <li>
                <span>Full Blockchain</span>
                <p><span>Not synced</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Mining)
