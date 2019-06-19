import { PerfomanceIcon,  WalletIcon, MiningIcon, SettingsIcon, LogoIcon, Sp } from './common'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CogIcon from './common/CogIcon'
import styled from 'styled-components'
import Logo from './Logo'

const { shell } = window.require('electron')

const LogoLargeContainer = styled.div`
  padding: 3.2rem 3.2rem 5.6rem;
  height: 125px;
  display: none;
  flex-shrink: 0;
  @media (min-width: 800px) {
    display: block;
  }
`

const LogoSmallContainer = styled.div`
  padding: 2.3rem 1.6rem;
  height: 125px;
  display: block;
  flex-shrink: 0;
  @media (min-width: 800px) {
    display: none;
  }
`


const IconWrapper = styled.div`
  margin-right: 1.6rem;
  margin-left: 0.3rem;
`


const Footer = styled.div`


  @media (min-width: 800px) {
    display: block;
  }
`


class Sidebar extends Component {
  render() {
    return (
      <aside className="panel">
      <Logo/>

        <nav class="menu">

          <a className="menu__link"
            activeClassName="active"
            data-testid="performance-nav-btn"
            href={'#/performance'}>
              <PerfomanceIcon />
            <p>Perfomance</p>
          </a>
          <a className="menu__link"
            activeClassName="active"
            data-testid="wallets-nav-btn"
            href={'#/wallets'}>
              <WalletIcon />
            <p>Wallet</p>
          </a>
          <a className="menu__link"
            activeClassName="active"
            data-testid="mining-nav-btn"
            href={'#/mining'}>
              <MiningIcon />
            <p>Mining</p>
          </a>
          <a className="menu__link"
            activeClassName="active"
            data-testid="mining-nav-btn"
            href={'#/settings'}>
              <SettingsIcon />
            <p>Settings</p>
          </a>

        </nav>

        <div className="footer">
          <div class="version">
            <p>Alpha version <span>0.01</span></p>
          </div>
        </div>
      </aside>
    )
  }
}

export default Sidebar
