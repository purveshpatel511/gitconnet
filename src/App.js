import './App.css';
import CustomButton from './components/custom-button/custom-button.component';
import VerticalScroll from './components/vertical-scroll/vertical-scroll.component'
import CardView from './components/cardview/cardview.component'
import Header from './components/header/header.component'
import NeumorphicText from './components/neumorphic-text/neumorphic-text.component'
import PageNotFound from './pages/404Page/404Page.component'
import CardList from './components/cardlist/cardlist.component';
import CardGrid from './components/cardgrid/cardgrid.component'
import Card from './components/card/card.component';
import UserProfile from './pages/user-profile/user-profile.component';
import AWSSVG from './components/skill-card/programing-language-logos/aws.svg';
import SkillCard from './components/skill-card/skill-card.component'
import UserProject from './pages/user-project/user-project.component';
import Notification from './pages/notification/notification.component';
import ProjectEditSkill from './components/project-edit-skill/project-edit-skill.component';
import CancelButton from './components/cancel-button/cancel-button.component';

function App() {
  return (
    <div className="App">
      <Header />
      <br /><br />
      {/* <ProjectEditSkill id="11" skill="Python">
        <CancelButton />
      </ProjectEditSkill> */}
      {/* <UserProject /> */}
      {/* <UserProfile /> */}
      {/* <Notification /> */}
      {/* <PageNotFound /> */}
      {/* <SkillCard imageURL={AWSSVG} imageText="AWS"/> */}
      {/* <VerticalScroll height="600px">
        <CardGrid gridColumn="1fr 1fr 1fr">
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          
        </CardGrid>
      </VerticalScroll> */}
    </div>
  );
}

export default App;
