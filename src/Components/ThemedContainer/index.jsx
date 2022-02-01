import React from 'react'
import './styles.css'
import { Menu } from './Menu'  
import { Header } from './Header'
import { Footer } from './Footer'

export class ThemedContainer extends React.Component {
  constructor() {
    super()
    this.state = { theme: 'dark', user: "user" }
  }

  render() {
    const handleSwitchTheme = () => {
      const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark'
      this.setState({ theme: nextTheme })
    }
    
    const handleSwitchUsers = () => {
      const nextUsers = this.state.user === 'user' ? 'admin' : 'user'
      this.setState({user: nextUsers})
      console.log(this.state.user)
    }

    return (
      <div className={`${this.state.theme} themed-container`}>
        <Menu user={this.state.user} />
        <button onClick={handleSwitchTheme}> Alternar tema </button>
        <Header theme={this.state.theme} />
        <button onClick={handleSwitchUsers}> Alternar usuário </button>
        <Footer theme={this.state.theme} />
      </div>
    )
  }
}