import Header from "./Shared/Header";
import { useState } from "react";
import HomeMain from "./Home/HomeMain";
import MainMenu from "./Shared/MainMenu";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from "./Gallery/Gallery";

function App() {
  const [rotateBtn, setRotateBtn] = useState(false);

  const changeRotateBtn = (isToggle) => {
    setRotateBtn(isToggle);
  }

  return (
    <Router>
      <div className="App">
        <Header 
          rotateBtn={rotateBtn}
          changeRotateBtn={changeRotateBtn}
        />
        <Switch>
          <Route exact path='/'>
            <HomeMain 
              rotateBtn={rotateBtn}
            />
          </Route>
          <Route path='/gallery'>
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
