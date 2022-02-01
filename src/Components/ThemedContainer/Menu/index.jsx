import React from "react"
import './styles.css'
import PropTypes from 'prop-types'

export class Menu extends React.Component {
  render() {
    return (
      <nav className={`${this.props.user} themed-menu`}>  
        <ul className="menu-container">
          { this.props.user ===  'admin' && 
            <>
              <li> <a href=''> Cadastros  </a> </li>  
              <li> <a href=''> Financeiro </a> </li> 
            </>
          }
          <li> <a href=''> Relatorios </a> </li>
          <li> Ususário: {this.props.user}</li>    
        </ul>
      
      </nav>
    )
  }
}

Menu.PropTypes = {
  user: PropTypes.string.isRequired,
}