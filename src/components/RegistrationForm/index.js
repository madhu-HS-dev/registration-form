// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isRegistrationSuccess: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    const isValidFirstName = firstName !== ''
    const isValidLastName = lastName !== ''

    if (isValidFirstName && isValidLastName) {
      this.setState({isRegistrationSuccess: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        isRegistrationSuccess: false,
      })
    }
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValidFirstName = firstName !== ''

    this.setState({firstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isValidLastName = lastName !== ''

    this.setState({lastNameError: !isValidLastName})
  }

  renderFormContainer = () => {
    const {firstName, lastName, firstNameError, lastNameError} = this.state

    const classNameFirstName = firstNameError ? 'error-input' : ''
    const classNameLastName = lastNameError ? 'error-input' : ''

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label htmlFor="firstName" className="label-heading">
            FIRST NAME
          </label>
          <br />
          <input
            type="text"
            id="firstName"
            className={`input ${classNameFirstName}`}
            placeholder="First name"
            value={firstName}
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
          {firstNameError ? <p className="error-message">Required</p> : ''}
        </div>
        <div className="input-container">
          <label htmlFor="lastName" className="label-heading">
            LAST NAME
          </label>
          <br />
          <input
            type="text"
            id="lastName"
            className={`input ${classNameLastName}`}
            placeholder="Last name"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
          {lastNameError ? <p className="error-message">Required</p> : ''}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isRegistrationSuccess: !prevState.isRegistrationSuccess,
      firstName: '',
      lastName: '',
      firstNameError: false,
      lastNameError: false,
    }))
  }

  renderSuccessContainer = () => (
    <div className="success-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="success-heading">Submitted Successfully</p>
      <button
        type="button"
        onClick={this.onClickSubmitAnotherResponse}
        className="submit-another-response-button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isRegistrationSuccess} = this.state
    return (
      <div className="registration-container">
        <h1 className="registration-heading">Registration</h1>
        {isRegistrationSuccess
          ? this.renderSuccessContainer()
          : this.renderFormContainer()}
      </div>
    )
  }
}

export default RegistrationForm
