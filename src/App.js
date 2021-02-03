import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Accueil from './Accueil';
import Realisations from './Realisations';
import Projets from './Projets';
import Contacts from './Contacts';
import ModeAcq from './ModeAcq';
import MetaTags from 'react-meta-tags';

function App() {
  return (
    <div className="App">
      <MetaTags>
          <meta name="keywords" content="Promoteur immobilier – projets de construction – Mi Souah – logements à Abidjan - logements à Toumodi – immobilier en Côte d’Ivoire – Leader de l’immobilier en Côte d’Ivoire – Toumodi – Dabou - immobilier – logements – Habitat – maison"/>
          <meta name="description" content=" Conscient qu’être propriétaire d’un bien immobilier est un souci majeur que tout ivoirien rencontre. MI SOUAH est un apport important au bien-être de la population tout en leur permettant de s’acquérir de logement de rêve quelque soit le budget. 
"/>
          <meta name="google-site-verification" content="F_-0UCVrtIHN57CXzu_WCE9DHKlvKAGceJsA5fecqow"/>
      </MetaTags>
      <BrowserRouter>
        <Route path="/" exact={true} component={Accueil}/>
        <Route path="/realisations" component={Realisations}/>
        <Route path="/projets" component={Projets}/>
        <Route path="/acquisitions" component={ModeAcq}/>
        <Route path="/contacts" component={Contacts}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
