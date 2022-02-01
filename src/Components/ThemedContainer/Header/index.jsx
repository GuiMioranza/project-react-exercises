import React from "react"
import './styles.css'
import PropTypes from 'prop-types'

export class Header extends React.Component {
  render() {
    return(
      <header className={`${this.props.theme} themed-header`}>
        <h1>Cabeçalho do site</h1>
      </header>
    )
  }
}

Header.PropTypes ={
  theme: PropTypes.string,
}