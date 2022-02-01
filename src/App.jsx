import React from 'react'
import './App.css'
import { FaDoorOpen } from 'react-icons/fa'

import { AttendanceList }  from './Components/AttendanceList'
import { Button } from './Components/Button/index'
import { Counter } from './Components/Counter'
import { ImagesList } from './Components/ImageLists'
import { PersonsList} from './Components/PeronsList'
import { ThemedContainer } from  './Components/ThemedContainer'
import { GithubProfile } from './Components/GitProfile'


function App() {
  const imageUrl = "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  const imagesUrlRandon = "https://source.unsplash.com/random/?city,night"
  
  return (
    <div className='app'>

      {/*<GithubProfile />*/}
      {/*<ImagesList counCount={3}/>*/} 
      {/*<Counter />*/}
      {/*<PersonsList />*/}
      {/*<AttendanceList />*/}
      {/*<ThemedContainer />*/}
      
      {/*<img src={imageUrl} alt="tela pc react" width="180"/>*/}
    
      {/*<Button
        isLoading={false}
        size={30}
      />*/}

      {/*<button size={40}>
        <FaDoorOpen />
        <span>
          <p> Entrar no sistema </p>
        </span>
      </button>*/}

      {/*<button id="login-button">
        <FaDoorOpen style={{fontSize: '35px'}} />
        <span> Fazer Login </span>
      </button>*/}

      {/*<button size={25}>
        Voltar ao topo
      </button>*/}
    
    </div>
  )
}

export default App