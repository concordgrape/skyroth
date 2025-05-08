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
          <div style={{backgroundColor: '#ffb067', width: 40, height: 40, borderRadius: '50%'}}></div>
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
    color: #4c4c4c;
    text-decoration: none;
  }

  & a:visited {
    color: #4c4c4c;
  }

  & a:hover {
    color: darkgrey;
  }
`
const OrLine = styled.div`
  width: 100%; 
  max-width: 500px;
  text-align: center; 
  border-bottom: 1px solid gray; 
  line-height: 0.1em;
  margin: 30px 0 30px;
`

const OrText = styled.span`
  padding: 0 30px;
  width: 100px;
  margin: auto;
  background-color: white;
  color: gray;
  font-family: Poppins;
  font-weight: 400;
  font-size: 13px;
  /*text-transform: uppercase;*/
`