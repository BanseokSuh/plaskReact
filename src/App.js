import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";

function App() {
  const [islogin, setIsLogin] = useState(false);

  // if (localStorage.getItem("access_token")) {
  //   setIsLogin(true);
  // }

  return (
    <div className="App">
      <Router>
        <Header>
          <Link to="/">Home</Link>
          {!islogin && <Link to="sign-in">Sign-in</Link>}
          <Link to="sign-up">Sign-up</Link>
        </Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign-in">
            <Signin setIsLogin={setIsLogin} />
          </Route>
          <Route exact path="/sign-up">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const Header = styled.header``;

export default App;
