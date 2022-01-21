import './styles.css'
import { FaSpinner } from 'react-icons/fa'
import propTypes from 'prop-types'

export function Button(props) {
  const {isLoading, size, children} = props

  if(isLoading) {
    return (
      <button style={{fontSize: `${size}px`}} className='btn'>
      <FaSpinner className='spin'/>
      </button>
    )
  }

  return (
    <button style={{fontSize:'${size}px'}} className='btn'>
      {children}
    </button>
  )
}


//export function Button (isLoading, size, children) {
//  return(
//    <button style={{fontSize: `${size}px`}}>
//      {/*{isLoading && 
//        'Carregando'
//      }    
//      {!isLoading && 
//        'Cadastre-se'
//      } 
//      {isLoading 
//        ?'Carregando'
//        : 'Cadastre-se'
//      }*/}
//
//      {isLoading 
//        ? <FaSpinner className='spin' />
//        : {children}
//      }
//    </button>
//  )
//}

Button.propTypes = {
  isLoading: propTypes.bool,
  size: propTypes.number,
}

Button.defoultProps = {
  isLoading: false, 
  size: 15,
}