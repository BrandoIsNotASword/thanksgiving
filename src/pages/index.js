import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
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

function IndexPage() {
  const intl = useIntl().formatMessage

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
            <Button>{intl({ id: 'cta' })}</Button>
            <Terms>{intl({ id: 'terms' })}</Terms>
          </CTAContent>
        </CTAWrapper>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
