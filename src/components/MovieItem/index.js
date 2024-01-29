// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'
import 'reactjs-popup/dist/index.css'

import {
  MovieItemContainer,
  Thumbnail,
  ModelContainer,
  CloseButton,
  MoviePlayerContainer,
} from './styledComponents'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <MovieItemContainer>
      <Popup
        modal
        trigger={<Thumbnail src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <ModelContainer>
            <CloseButton
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </CloseButton>
            <MoviePlayerContainer>
              <ReactPlayer url={videoUrl} controls />
            </MoviePlayerContainer>
          </ModelContainer>
        )}
      </Popup>
    </MovieItemContainer>
  )
}

export default MovieItem
