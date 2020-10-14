import React, { useState, useEffect } from 'react'
import { useIntl, IntlContextConsumer } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import logoPromo from '../images/frase-desk.png'
import logoPromoMobile from '../images/frase-mobile.png'
import logoForbes from '../images/logo-forbes.png'

const MIN_WIDTH = '768px'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  height: 100%;
`

const LogoPromo = styled.img`
  height: auto;
  width: 100%;
  max-width: 700px;
  box-sizing: border-box;
  display: none;
  opacity: 0.75;

  @media (min-width: 1024px) {
    display: initial;
  }
`

const LogoPromoMobile = styled.img`
  height: auto;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  opacity: 0.75;
  margin-top: 15px;

  @media (min-width: 1024px) {
    margin-top: 0px;
    display: none;
  }
`

const LogoForbes = styled.img`
  height: auto;
  width: 100%;
  max-width: 150px;
  box-sizing: border-box;
  margin-top: 16px;
  opacity: 0.75;

  @media (min-width: 1024px) {
    max-width: 240px;
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

  @media (min-width: 1024px) {
    flex-direction: row;

    & > :first-child {
      margin-right: 32px;
    }

    & > :last-child {
      margin-left: 32px;
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

  @media (min-width: ${MIN_WIDTH}) {
    width: 350px;
  }
`

const P = styled.p`
  margin: 0;
`

const Button = styled.button`
  width: 100%;
  border: none;
  color: white;
  background-color: #e98f19;
  border-radius: 100px;
  height: 50px;
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 15px;
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
      <SEO title="Promoción Forbes" />
      <Wrapper>
        <LogoPromo src={logoPromo} />
        <LogoPromoMobile src={logoPromoMobile} />
        <LogoForbes src={logoForbes} />
        <Hr />
        <CTAWrapper>
          <CTAContent>
            <P
              style={{ fontSize: '6rem', fontWeight: 'bold', opacity: '0.85', lineHeight: '80px' }}
            >
              40%
            </P>
            <P style={{ fontSize: '1.5rem', fontWeight: 'bold', opacity: '0.85' }}>DE DESCUENTO</P>
            <P style={{ fontSize: '1.25rem', opacity: '0.85', marginTop: '10px' }}>
              VIAJANDO DEL 1 DE SEPTIEMBRE AL 20 DE DICIEMBRE
            </P>
            <Button onClick={() => onOpenModal('promotion/FORBES40/', '2020-09-01')}>
              {intl({ id: 'cta' })}
            </Button>
            <P
              style={{
                fontSize: '0.85rem',
                marginTop: '5px',
              }}
            >
              EXCEPTO: DEL 26 AL 30 DE NOVIEMBRE
            </P>
          </CTAContent>
          <CTAHr />
          <CTAContent>
            <P
              style={{ fontSize: '6rem', fontWeight: 'bold', opacity: '0.85', lineHeight: '80px' }}
            >
              15%
            </P>
            <P style={{ fontSize: '1.5rem', fontWeight: 'bold', opacity: '0.85' }}>DE DESCUENTO</P>
            <P style={{ fontSize: '1.25rem', opacity: '0.85', marginTop: '10px' }}>
              VIAJANDO DEL 16 DE ENERO AL 1 DE SEPTIEMBRE
            </P>
            <Button onClick={() => onOpenModal('promotion/FORBES2/', '2021-01-16')}>
              {intl({ id: 'cta' })}
            </Button>
            <P
              style={{
                fontSize: '0.85rem',
                marginTop: '5px',
              }}
            >
              EXCEPTO: DEL 26 MARZO AL 11 DE ABRIL
            </P>
          </CTAContent>
        </CTAWrapper>
        <Terms style={{ color: 'white', marginTop: '15px' }}>
          No reembolsable. No aplica con otras promociones. No aplica para grupos o bodas.
        </Terms>
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
