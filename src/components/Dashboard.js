import DashboardHeader from './DashboardHeader'
import * as selectors from '../selectors'
import ReceiveDrawer from './ReceiveDrawer'
import BalanceBlock from './BalanceBlock'
import { connect } from 'react-redux'
import SendDrawer from './SendDrawer'
import PropTypes from 'prop-types'
import { Btn } from './common'
import styled from 'styled-components'
import TxList from './tx-list/TxList'
import React from 'react'

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

const Hero = styled.div`
  margin-top: 2.4rem;
  @media (min-width: 1040px) {
    margin-top: 4.8rem;
    display: flex;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  background-color: ${p => p.theme.colors.lightShade};
  border-radius: 4px;
  padding: 0 1.2rem;
  @media (min-width: 1040px) {
    padding: 0 2.4rem;
  }
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  min-width: 18rem;
  margin-top: 3.2rem;

  @media (min-width: 1040px) {
    margin-top: 0;
    margin-left: 1.6rem;
    flex-direction: column;
  }
`

const ReceiveBtn = Btn.extend`
  margin-left: 3.2rem;

  @media (min-width: 1040px) {
    margin-left: 0;
    margin-top: 1.6rem;
  }
`

class Dashboard extends React.Component {
  static propTypes = {
    sendFeatureStatus: PropTypes.oneOf(['offline', 'no-funds', 'ok']).isRequired
  }

  state = {
    activeModal: null
  }

  onOpenModal = e => this.setState({ activeModal: e.target.dataset.modal })

  onCloseModal = () => this.setState({ activeModal: null })

  render() {
    const { sendFeatureStatus } = this.props

    return (
      <div class="container" data-testid="dashboard-container">
        <FixedContainer>
          <DashboardHeader />
        </FixedContainer>
        <div class="container">
        <div class="wallet">
          <h2>Wallet</h2>
          <ul class="wallet__head">
            <li class="wallet__type">Type</li>
            <li class="wallet__amount">Amount</li>
            <li class="wallet__address">Address</li>
            <li class="wallet__status">Status</li>
            <li class="wallet__date">Create Date</li>
          </ul>
          <ul class="wallet__data">
            <li>
              <p class="wallet__type">Deposit</p>
              <p class="wallet__amount"><span>0.12345 </span>($1.13)</p>
              <p class="wallet__address">1k35j…f0d9j<img src={process.env.PUBLIC_URL + '/images/ic_copy.svg'} alt=""/></p>
              <p class="wallet__status">Pending…</p>
              <p class="wallet__date">Today at 05:13 pm</p>
            </li>
          </ul>
        </div>
        </div>
        </div>

    )
  }
}

const mapStateToProps = state => ({
  sendFeatureStatus: selectors.sendFeatureStatus(state)
})

export default connect(mapStateToProps)(Dashboard)
