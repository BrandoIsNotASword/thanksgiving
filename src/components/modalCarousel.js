import React, { useEffect } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import Img from 'gatsby-image'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import { MdClose } from 'react-icons/md'

const Wrapper = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 15px 5%;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Slide = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CloseModal = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`

function GalleryCarousel({ isOpen, selectedImage, gallery, onCloseModal }) {
  const intl = useIntl().formatMessage

  useEffect(() => {
    document.addEventListener('keydown', keyPressHandler)
    return () => {
      document.removeEventListener('keydown', keyPressHandler)
    }
  })

  if (!isOpen) return null

  const keyPressHandler = (e) => {
    if (e.keyCode === 27) onCloseModal()
  }

  return (
    <Wrapper>
      <Carousel
        enableKeyboardControls
        autoGenerateStyleTag={false}
        slideIndex={selectedImage}
        defaultControlsConfig={{
          nextButtonText: intl({ id: 'nextSlide' }),
          prevButtonText: intl({ id: 'prevSlide' }),
        }}
      >
        {gallery.map((image) => (
          <Slide key={uuid()}>
            <Img alt="" imgStyle={{ objectFit: 'contain' }} fixed={image} />
          </Slide>
        ))}
      </Carousel>
      <CloseModal onClick={() => onCloseModal()}>
        <MdClose style={{ fontSize: '1.75rem' }} />
      </CloseModal>
    </Wrapper>
  )
}

export default GalleryCarousel
