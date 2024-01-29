// Write your code here
import {
  PrimeVideoContainer,
  PrimeVideoBgImage,
  MoviesContainer,
  MoviesHeading,
} from './styledComponent'
import MoviesSlider from '../MoviesSlider'

const actionMovieCategory = 'ACTION'
const comedyMovieCategory = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovieCategory,
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovieCategory,
  )

  return (
    <PrimeVideoContainer className="bg-container">
      <PrimeVideoBgImage
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer className="movies-container">
        <MoviesHeading>Action Movies</MoviesHeading>
        <MoviesSlider moviesList={actionMoviesList} />
        <MoviesHeading>Comedy Movies</MoviesHeading>
        <MoviesSlider moviesList={comedyMoviesList} />
      </MoviesContainer>
    </PrimeVideoContainer>
  )
}

export default PrimeVideo
