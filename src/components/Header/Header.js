import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span>
          {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link className='navLink' to='/login'>Login</Link>
        {' '}
        <Link className='navLink' to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <div className='headerFlex'>
        <header>
          <div className='filler'></div>
          <h1 >
            <Link className='title' to='/'>
              Spaced Repetition
            </Link>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </header>
      </div>
    );
  }
}

export default Header
