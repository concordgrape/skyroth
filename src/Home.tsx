import React from 'react';
import styled from 'styled-components';
import { Heading, Avatar } from 'evergreen-ui';

const GITHUB_LINK = "http://www.github.com/concordgrape";
const YEADEV_LINK = "http://www.yea.dev";
const WHITEBORDER_LINK = "https://apps.apple.com/ca/app/white-border/id1574787497";
const DERMI_LINK = "https://apps.apple.com/us/app/dermi-skin-care-journal/id1570511480";
const LOREMGEN_LINK = "http://www.loremgen.com";
const HTMLCOLORS_LINK = "http://www.htmlcolors.co";
const CSSCOLORS_LINK = "http://www.csscolors.net";

function Home() {
  return (
    <HomeWrapper>
        <Heading size={900}>Links</Heading>
        <AvatarWrapper>
          <Avatar name="Sky Roth" size={40} color="blue" />
        </AvatarWrapper>
        <LinksWrapper>
          <Header size={700}><a href={YEADEV_LINK} target="_blank" rel="noreferrer">yea.dev</a></Header>
          <Header size={700}><a href={GITHUB_LINK} target="_blank" rel="noreferrer">github.com/concordgrape</a></Header>
          <br />
          <Header>still adding stuff here lol</Header>
          <OrLine>
            <OrText>links</OrText>
          </OrLine>
          <Header size={700}><a href={HTMLCOLORS_LINK} target="_blank" rel="noreferrer">htmlcolors.co</a> / <a href={CSSCOLORS_LINK} target="_blank" rel="noreferrer">csscolors.net</a></Header>
          <Header size={700}><a href={LOREMGEN_LINK} target="_blank" rel="noreferrer">loremgen.com</a></Header>
          <br />
          <Header size={700}><a href={WHITEBORDER_LINK} target="_blank" rel="noreferrer">white_border - App</a></Header>
          <Header size={700}><a href={DERMI_LINK} target="_blank" rel="noreferrer">dermi - App</a></Header>
        </LinksWrapper>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  margin: 4em;
`

const AvatarWrapper = styled.div`
  margin-top: 15px;
`

const LinksWrapper = styled.div`
  margin-top: 20px;
`

const Header = styled(Heading)`
  margin-top: 10px;
`

const OrLine = styled.div`
  padding-top: 1.625rem;
  line-height: 0;
  border-bottom: 1px solid black;
  margin-bottom: 40px;
`

const OrText = styled.span`
  display: inline;
  padding: 0 0.625rem;
  font-weight: 700;
  background: #fff;
  color: black;
  text-transform: uppercase;
  font-size: .625rem;
  line-height: 0;
`
