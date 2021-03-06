import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { setupConfig } from '@ionic/react';
import Home from './pages/Home/Home';
import ChooseSize from './pages/ChooseSize/ChooseSize';
import ChooseCrust from './pages/ChooseCrust/ChooseCrust';
import ChooseToppings from './pages/ChooseToppings/ChooseToppings';

/* Custom CSS */
import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/fonts.css';

setupConfig({
  mode: 'md'
});

const App: React.FC = () => (
  <IonApp>
    <div className="app-backdrop-container">
      <div className="app-backdrop-message">Sorry, for the moment this demo is available only for the resolution 375x800.</div>
    </div>

    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/choose-size">
          <ChooseSize />
        </Route>
        <Route exact path="/choose-crust">
          <ChooseCrust />
        </Route>
        <Route exact path="/choose-toppings">
          <ChooseToppings />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>

  </IonApp>
);

export default App;
