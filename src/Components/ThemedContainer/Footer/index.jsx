import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

export class Footer extends React.Component {
  render() {
    return (
      <footer className={`${this.props.theme} themed-footer`}>
        <h1>rodapé da página</h1>
      </footer>
    )
  }
}

Footer.propTypes = {
  theme: PropTypes.string,
}