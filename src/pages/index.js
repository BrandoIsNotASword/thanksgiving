import React, { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useIntl, IntlContextConsumer } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import logoPromo from '../images/logo-promo.png'

const MIN_WIDTH = '768px'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
`

const LogoPromo = styled.img`
  height: auto;
  width: 150%;
  max-width: 700px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
  }
`

const Hr = styled.div`
  width: 100%;
  height: 2px;
  opacity: 0.35;
  background-color: white;
  display: block;
  margin: 15px 0;

  @media (min-width: 1024px) {
    margin: 32px 0;
  }
`

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;

    & > :not(:last-child) {
      margin-right: 32px;
    }
  }
`

const CTAHr = styled.div`
  height: 2px;
  opacity: 0.35;
  background-color: white;
  margin: 15px 0;

  @media (min-width: 1024px) {
    height: auto;
    width: 2px;
    margin: 0%;
  }
`

const CTAContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  color: white;
  text-align: center;
  margin: 0 auto;

  @media (min-width: ${MIN_WIDTH}) {
    width: 250px;
  }
`

const P = styled.p`
  margin: 0;
`

const Button = styled.a`
  width: 100%;
  max-width: 250px;
  border: none;
  color: white;
  background-color: #ff202f;
  border-radius: 100px;
  height: 50px;
  font-weight: bold;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 25px;
  text-decoration: none;
  cursor: pointer;
`

const ButtonOutline = styled.a`
  opacity: 0.85;
  width: auto;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 100px;
  height: 45px;
  padding: 0 1rem;
  font-weight: bold;
  font-size: 1.25em;
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
`

const Terms = styled.span`
  margin: 0;
  opacity: 0.85;
  font-size: 0.8em;
  margin: 10px 0;
  text-align: center;
`

const ModalIframe = styled.div`
  position: fixed;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WrapperIframe = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  position: relative;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

function IndexPage() {
  const [promo, setPromo] = useState('')
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [bookOpen, setBookOpen] = useState(false)
  const intl = useIntl().formatMessage

  useEffect(() => {
    window.addEventListener('message', onMessage, false)
    return () => window.removeEventListener('message', onMessage, false)
  })

  const onOpenModal = (promo, checkIn, checkOut) => {
    document.body.style.overflow = 'hidden'
    setPromo(promo)
    setCheckIn(checkIn)
    setCheckOut(checkOut)
    setBookOpen(true)
  }

  const onCloseModal = () => {
    document.body.style.overflow = 'initial'
    setBookOpen(false)
  }

  const onMessage = (e) => {
    if (e.data.func === 'zbeCloseBooking') onCloseModal()
  }

  return (
    <Layout>
      <SEO title="Thanksgiving Promo" />
      <Wrapper>
        <LogoPromo src={logoPromo} />
        <Button onClick={() => onOpenModal()}>{intl({ id: 'cta' })}</Button>
      </Wrapper>
      {bookOpen && (
        <ModalIframe>
          <WrapperIframe>
            <IntlContextConsumer>
              {({ language: currentLocale }) => (
                <Iframe
                  src={`https://rbe.zaviaerp.com/${promo}?hotel=232&arrival=${checkIn}&departure=${checkOut}&lng=${currentLocale}`}
                />
              )}
            </IntlContextConsumer>
          </WrapperIframe>
        </ModalIframe>
      )}
    </Layout>
  )
}

export default IndexPage
