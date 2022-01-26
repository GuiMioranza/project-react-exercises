import React from 'react'

export class Counter extends React.Component {
  constructor() {
    super()
    this.state = { contador: 0 }
  }

  render() {
    const handleDecrementCount = () => {
      this.setState({
        contador: this.state.contador > 0 ? this.state.contador -1 : 0
      })
    }

    return(
      <div>
        <p> Contador: {this.state.contador} </p>
        <button
          onClick={() => this.setState({contador: this.state.contador + 1})}
        >
        Aumenta a Contagem
        </button>

        <button 
        onClick={handleDecrementCount}
        >
        Diminue a Contagem
        </button>
        
      </div>
    )
  }
}