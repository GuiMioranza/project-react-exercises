import React from "react"
import './styles.css'
import { v4 as uuid } from 'uuid'

export class AttendanceList extends React.Component {
  constructor() {
    super()
    this.state = { studentName: '', studentList: [] }
  }

  render() {
    const handleAddStudentName = event => {
      event.preventDefault()
      if (this.state.studentName.length < 2) {
        return
      }

      this.setState({
        studentName: '',
        studentList: [...this.state.studentList, this.state.studentName],
      })
    }

    return(
      <div>
        <form action="" onSubmit={handleAddStudentName}>
          <label htmlFor="name">Escreva o nome do aluno: </label>
          <input 
            id ="name" 
            type="search" 
            onChange={event => 
              this.setState({
                studentName: event.target.value,
              })
            }
            value={this.state.studentName}
          />
          <button type="submit">Adicionar presença</button>
        </form>
          <ol className="ordenate-list">
            {this.state.studentList.map(student => 
              (<li key={uuid}>{student}</li>))}
          </ol>
      </div>
    )
  }
}

  