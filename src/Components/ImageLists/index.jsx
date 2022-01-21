import './styles.css'
import PropTypes from 'prop-types'
//import { v4 as uuid } from 'uuid'


export function ImagesList(props) {
  const {columnCount} = props

  const imagesUrlRandon = "https://source.unsplash.com/random/?city,night"
  
  //const images = [
  // imagesUrlRandon,
  // imagesUrlRandon,
  // imagesUrlRandon,
  // imagesUrlRandon,
  // imagesUrlRandon,
  // imagesUrlRandon,
  // imagesUrlRandon,
  // imagesUrlRandon,
  // imagesUrlRandon,
  // imagesUrlRandon,
  // imagesUrlRandon,
  // imagesUrlRandon
  //]
       
  const images = Array.from({length: 12}, (_image, index) => {
    return {
      id: index,
      url: `${imagesUrlRandon}, ${index}`,
    }
  })

  return (
    <div className="image-list">
      <ul>
      {
        images.map((image) => 
        <li key={image.id} style={{flexBasis: `calc(${100/columnCount}% - 2  18px)`}}>
          <img src={image.url} alt="imagem aleatória" width={180} />
        </li>
        )
      }
      </ul>
    </div>
  )
}

ImagesList.propTypes = {
  columnCount: PropTypes.number
}


//    <div className="image-randon">
//      <ul>
//        {imagesUrls.map(image => 
//           <li key={image.id}>
//            <p>{image.id}</p>
//            <p>{image.url}</p>
//          </li>
//        )}
//      </ul>