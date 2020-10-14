import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

import logo from '../images/logo.svg'

const MIN_WIDTH = '768px'
const LANGS_NAME = {
  en: 'English',
  es: 'Español',
}

const Wrapper = styled.header`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 110px;
  padding: 0 15px;

  @media (min-width: ${MIN_WIDTH}) {
    padding: 25px 80px;
  }
`

const Logo = styled.div`
  height: 100px;
`

const LangOptions = styled.div`
  display: flex;
  align-items: center;
`

const LinkLang = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => props.color};
  margin-left: 15px;
  cursor: pointer;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);

  &:hover {
    color: #2d9a92;
  }
`

function Header() {
  return (
    <Wrapper>
      <Logo href="https://anayjose.com/">
        <img style={{ height: '100%' }} src={logo} alt="Ana y José Tulum" />
      </Logo>
      {/*<LangOptions>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map((language) => (
              <LinkLang
                key={language}
                color={currentLocale === language ? '#2d9a92' : '#ffffff'}
                onClick={() => changeLocale(language)}
              >
                {LANGS_NAME[language]}
              </LinkLang>
            ))
          }
        </IntlContextConsumer>
        </LangOptions> */}
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
