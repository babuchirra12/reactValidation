import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import SingUp from "./components/Singup";
import CountryListpage from "./components/CountryListpage";
import UserListPage from "./components/UserListPage";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/SingUp" component={SingUp} />
          <Route path="/UserListPage" component={UserListPage} />
          <Route path="/CountryListpage" component={CountryListpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
