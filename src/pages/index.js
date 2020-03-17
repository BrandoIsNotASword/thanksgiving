import React, { useState, useEffect } from 'react'
import { useIntl, IntlContextConsumer } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import logoPromo from '../images/logo-promo.png'

const MIN_WIDTH = '768px'
const MIN_WIDTH_MD = '1440px'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;

  @media (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
    padding-left: 50px;
    padding-right: 50px;
  }
`

const LogoPromo = styled.img`
  height: auto;
  width: 80%;
  max-width: 300px;
  box-sizing: border-box;

  @media (min-width: ${MIN_WIDTH}) {
    max-width: 100%;
    width: 50%;
  }
`

const CTAWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 220px;
  align-items: center;
  background-color: rgba(45, 154, 146, 0.85);
  color: white;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: ${MIN_WIDTH}) {
    border-radius: 25px 0 0 25px;
    height: 260px;
    margin-left: 25px;
    margin-right: -50px;
  }

  @media (min-width: ${MIN_WIDTH_MD}) {
    border-radius: 25px;
    margin-right: 0;
  }
`

const CTAContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 auto;
  width: 350px;

  @media (min-width: ${MIN_WIDTH}) {
    margin: 0;
    padding-left: 50px;
  }

  @media (min-width: ${MIN_WIDTH_MD}) {
    padding-left: 0;
    margin: 0 auto;
  }
`

const P = styled.p`
  margin: 0;
`

const Button = styled.button`
  width: 100%;
  border: none;
  color: white;
  background-color: #205575;
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
  margin-top: 5px;
`

const ModalIframe = styled.div`
  position: fixed;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
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
  const [bookOpen, setBookOpen] = useState(false)
  const intl = useIntl().formatMessage

  useEffect(() => {
    window.addEventListener('message', onMessage, false)
    return () => window.removeEventListener('message', onMessage, false)
  })

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden'
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
      <SEO title={intl({ id: 'title' })} />
      <Wrapper>
        <LogoPromo src={logoPromo} />
        <CTAWrapper>
          <CTAContent>
            <P style={{ fontSize: '2.5rem', opacity: '0.85' }}>{intl({ id: 'date' })}</P>
            <P
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginTop: '5px',
              }}
            >
              {intl({ id: 'description' })}
            </P>
            <Button onClick={onOpenModal}>{intl({ id: 'cta' })}</Button>
            <Terms>{intl({ id: 'terms' })}</Terms>
          </CTAContent>
        </CTAWrapper>
      </Wrapper>
      {bookOpen && (
        <ModalIframe>
          <WrapperIframe>
            <IntlContextConsumer>
              {({ language: currentLocale }) => (
                <Iframe
                  src={`https://rbe.zaviaerp.com/?hotel=230&zbe_arrival=2020-03-01&zbe_departure=2020-03-02&lng=${currentLocale}`}
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
