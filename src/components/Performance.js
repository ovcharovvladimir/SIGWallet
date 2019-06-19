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
class Performance extends React.Component {
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
          <div class="performance">
            <div class="performance__container">
              <div class="performance__first">
                <div class="performance__block">
                  <p>2012</p>
                  <span>Transactions Per Second (TPS)</span>
                </div>
                <div class="performance__block">
                  <p>86,645,193</p>
                  <span>Difficulty</span>
                </div>
              </div>
              <div class="performance__second">
                <div class="performance__block">
                  <p>86,645,193</p>
                  <span>Shards</span>
                </div>
                <div class="performance__block">
                  <p>6,764,979</p>
                  <span>Current Block</span>
                </div>
                <div class="performance__block">
                  <p>6,764,979</p>
                  <span>Max Height Block</span>
                </div>
              </div>
              <div class="performance__last">
                <div class="performance__block">
                  <p>Downloading block 2 494 091 of 3 083 431 (2 days left)</p>
                  <div><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Performance)
