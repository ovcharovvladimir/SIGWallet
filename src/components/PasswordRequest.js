import { TextInput, Btn, Sp } from './common'
import { validatePassword } from '../validator'
import AltLayout from './AltLayout'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const ErrorMsg = styled.div`
  color: ${p => p.theme.colors.danger};
  margin-top: 1.6rem;
`

export default class PasswordRequest extends React.Component {
  static propTypes = {
    onLoginSubmit: PropTypes.func.isRequired
  }

  state = {
    password: null,
    status: 'init',
    errors: {},
    error: null
  }

  onInputChanged = e => {
    this.setState({ [e.target.id]: e.target.value, errors: {}, error: null })
  }

  onPasswordSubmitted = e => {
    e.preventDefault()

    const errors = this.validate()
    if (Object.keys(errors).length > 0) return this.setState({ errors })

    this.setState({ status: 'pending', error: null })
    this.props.onLoginSubmit({ password: this.state.password }).catch(err =>
      this.setState({
        status: 'failure',
        error: err.message || 'Unknown error'
      })
    )
  }

  validate = () => {
    const { password } = this.state
    return { ...validatePassword(password) }
  }

  render() {
    const { password, errors, status, error } = this.state

    return (
      <AltLayout title="Enter your password">
          <div class="form">
            <form  onSubmit={this.onPasswordSubmitted} data-testid="login-form"  class="form__container">
              <Sp mt={1}>
                <span class="error" data-testid="error-msg">{errors.password}{error}</span>
              </Sp>
              <Sp mt={1}>
              <input type="password" name=""
                data-testid="pass-field"
               autoFocus="true"
               onChange={this.onInputChanged}
               error={errors.password}
               label="Password"
               value={password}
               type="password"
               id="password"
              />
              </Sp>
              <Sp mt={1}>
              <button type="submit" block="true" submit disabled={status === 'pending'}>Sign In</button>
              </Sp>

            </form>
            <div class="links">
              <a href="">Forgot password?</a>
            </div>
          </div>
      </AltLayout>
    )


  }
}
