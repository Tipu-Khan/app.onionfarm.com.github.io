import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import OwlStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import { Redirect } from 'react-router-dom'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/dove-bg-mobile.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/dove-pic1.png'), url('/images/dove-pic2.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      { (window.location.href.includes("pools") === true) &&
      <Redirect to="/pools" />
      }
      { (window.location.href.includes("farms") === true) &&
        <Redirect to="/farms" />
      }
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'DOVESWAP FINANCE')}
        </Heading>
        <Text>{TranslateString(578, 'The high yield farm on Binance Smart Chain')}</Text>
      </Hero>
      <Hero style={{backgroundImage:'none'}}>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(10006, 'Calling all DOVE designers!')}
        </Heading>
        <Text>{TranslateString(10007, 'We are running a design contest to enhance DoveSwap overall look and feel!')}</Text>
        <Text>{TranslateString(10008, 'Over 1000 $DOVE in prizes')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <OwlStats />
          <div>
            <EarnAPYCard />
            <TotalValueLockedCard />
          </div>
        </Cards>
      </div>
    </Page>
  )
}

export default Home
