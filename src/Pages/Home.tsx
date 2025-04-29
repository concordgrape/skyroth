import styled from 'styled-components';
import { 
  Heading,
  Avatar
} from 'evergreen-ui';

//  LINKS
import { 
  GITHUB_LINK,
  WHITEBORDER_LINK,
  DERMI_LINK,
  VERBUU_LINK,
  WORDHUNT_LINK
} from '../Constants/URLs';

function Home() {
  return (
    <HomeWrapper>
        <AvatarWrapper>
          <Avatar name="Sky Roth" size={40} color="blue" />
        </AvatarWrapper>
        <LinksWrapper>
          <Header size={700}><a href={GITHUB_LINK} target="_blank" rel="noreferrer">github.com/concordgrape</a></Header>
          <br />
          <OrLine>
            <OrText>projects</OrText>
          </OrLine>
          <Header size={700}><a href={WORDHUNT_LINK} target="_blank" rel="noreferrer">wordhunt.io</a></Header>
          <Header size={700}><a href={VERBUU_LINK} target="_blank" rel="noreferrer">verbuu.com</a></Header>
          <Header size={700}><a href={WHITEBORDER_LINK} target="_blank" rel="noreferrer">white_border</a></Header>
          <Header size={700}><a href={DERMI_LINK} target="_blank" rel="noreferrer">dermi</a></Header>
        </LinksWrapper>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  margin: 2em;
  margin-top: 4em;
  margin-bottom: 4em;
  justify-content: center;
  align-items: center;
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
    color: darkgrey;
    text-decoration: none;
  }

  & a:visited {
    color: darkgrey;
  }

  & a:hover {
    color: #B0CCEA;
  }
`
const OrLine = styled.div`
  width: 100%; 
  max-width: 500px;
  text-align: center; 
  border-bottom: 1px solid #B7B8B6; 
  line-height: 0.1em;
  margin: 30px 0 30px;
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
