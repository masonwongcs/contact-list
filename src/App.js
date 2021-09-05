import GlobalStyle from "./GlobalStyled";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ContactList from "./components/ContactList";
import AddEditContact from "./components/AddEditContact";

const routes = [
  { path: "/add", Component: AddEditContact },
  { path: "/edit/:uuid", Component: AddEditContact },
];

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <ContactList />
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Router>
    </div>
  );
}

export default App;
