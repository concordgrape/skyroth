import styled from 'styled-components';
import { 
  Heading,
  Avatar
} from 'evergreen-ui';

//  LINKS
import { 
  GITHUB_LINK,
  HTMLCOLORS_LINK,
  CSSCOLORS_LINK,
  LOREMGEN_LINK,
  WHITEBORDER_LINK,
  DERMI_LINK
} from '../Constants/URLs';

function Home() {
  return (
    <HomeWrapper>
        <AvatarWrapper>
          <Avatar name="Sky Roth" size={40} color="orange" />
        </AvatarWrapper>
        <LinksWrapper>
          <Header size={700}><a href={GITHUB_LINK} target="_blank" rel="noreferrer">github.com/concordgrape</a></Header>
          <br />
          <OrLine>
              <OrText>web</OrText>
            </OrLine>
          <Header size={700}><a href={HTMLCOLORS_LINK} target="_blank" rel="noreferrer">htmlcolors.co</a> / <a href={CSSCOLORS_LINK} target="_blank" rel="noreferrer">csscolors.net</a></Header>
          <Header size={700}><a href={LOREMGEN_LINK} target="_blank" rel="noreferrer">loremgen.com</a></Header>
          <OrLine>
              <OrText>app</OrText>
            </OrLine>
          <Header size={700}><a href={WHITEBORDER_LINK} target="_blank" rel="noreferrer">white_border</a></Header>
          <Header size={700}><a href={DERMI_LINK} target="_blank" rel="noreferrer">dermi</a></Header>
          {/*<br />
          <br />
          <br />
          <Header style={{color: '#9a9a9a'}}>I know, I'm a programmer not a designer</Header>*/}
        </LinksWrapper>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  margin: 25em;
  margin-top: 4em;
  margin-bottom: 4em;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin: 2em;
  }
`

const AvatarWrapper = styled.div`
  margin-top: 15px;
`

const LinksWrapper = styled.div`
  margin-top: 20px;
`

const Header = styled(Heading)`
  margin-top: 10px;
  color: white;

  & a {
    color: #B0CCEA;
    text-decoration: none;
  }

  & a:visited {
    color: #B0CCEA;
  }

  & a:hover {
    color: darkgrey;
  }
`
const OrLine = styled.div`
  width: 100%; 
  text-align: center; 
  border-bottom: 1px solid #B7B8B6; 
  line-height: 0.1em;
  margin: 30px 0 30px;

  @media only screen and (max-width: 768px) {
    margin: 50px 0 50px;
  }
`

const OrText = styled.span`
  padding: 0 30px;
  width: 100px;
  margin: auto;
  background-color: #262626;
  color: white;
  font-family: Poppins;
  font-weight: 600;
  /*text-transform: uppercase;*/
`
