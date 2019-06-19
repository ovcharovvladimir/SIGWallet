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
class Settings extends React.Component {
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
          <div class="settings">
            <h2>Settings</h2>
            <div class="settings__chain">
              <div class="description">
                <p>Restore Chain</p>
                <span>Flush and rebuild the chain.</span>
              </div>
              <a href="" class="controlBtn">Restore</a>
            </div>
            <div class="settings__network">
              <div class="description">
                <p>Change Network</p>
                <span>Testnet is a separate blockchain from mainnet, and it’s used to test network only.</span>
              </div>
              <div class="settings__control">            
                <a href="" class="controlBtn">Mainnet</a>
                <a href="" class="controlBtn">Testnet</a>
              </div>
            </div>
            <div class="settings__seed">
              <div class="description">
                <p>Backup Seed</p>
                <span>Seed allows restoring access in the future to the wallet in case you don’t remember your password or you lost your computer.</span>
              </div>
              <a href="" class="controlBtn">Backup</a>
            </div>
            <div class="settings__change">
              <div class="description">
                <p>Change Password</p>
                <span>Your password is never shared with our servers.</span>
              </div>
              <a href="" class="controlBtn">Change</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Settings)
