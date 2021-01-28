import './App.css';
import Header from './components/header/header.component';
import PageNotFound from './pages/404Page/404Page.component';
import UserProfile from './pages/user-profile/user-profile.component';
import UserProject from './pages/user-project/user-project.component';
import Notification from './pages/notification/notification.component';
import SearchPage from './pages/search-page/search-page.component';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <br /><br />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/projects" component={UserProject} />
          <Route exact path="/notifications" component={Notification} />
          <Route exact path="/signout" component={SearchPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
