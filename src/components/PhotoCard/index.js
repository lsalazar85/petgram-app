import React from 'react'
import { string, number } from 'prop-types'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useLazyLoader } from '../../hooks/useLazyLoader'
import { DEFAULT_IMAGE } from '../../constans'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useLazyLoader()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {
        show &&
        (<>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>)
      }
    </Article>
  )
}

PhotoCard.displayName = 'Photocard'

PhotoCard.propTypes = {
  id: number.isRequired,
  src: string.isRequired,
  likes: number.isRequired
}
