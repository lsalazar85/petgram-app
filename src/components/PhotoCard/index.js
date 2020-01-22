import React from 'react'
import { string, number } from 'prop-types'
import { Link } from '@reach/router'
import { Article, ImgWrapper, Img } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useLazyLoader } from '../../hooks/useLazyLoader'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { DEFAULT_IMAGE } from '../../constans'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useLazyLoader()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={ref}>
      {
        show &&
        (<>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const _handleFavButton = () => {
                  !liked && toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                  setLiked(!liked)
                }

                return (
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={_handleFavButton}
                  />
                )
              }
            }
          </ToggleLikeMutation>
        </>)
      }
    </Article>
  )
}

PhotoCard.displayName = 'Photocard'

PhotoCard.propTypes = {
  id: string.isRequired,
  src: string.isRequired,
  likes: number.isRequired
}
