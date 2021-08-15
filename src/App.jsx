
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/main"
import SubGal from "./components/SubGallery/g1"
import {InteriorGallery} from './components/interior_gallery'
import {UpvcGallery} from './components/upvc_gallery'
const App = () => {


  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Main} />
      <Route  path="/g1" component={SubGal} />
      <Route exact path="/interior_gallery" component={InteriorGallery} />
      <Route exact path="/upvc_gallery" component={UpvcGallery} />
      <Route  path="/g2" component={SubGal} />
      <Route exact path="/g3" component={SubGal} />
      <Route exact path="/g4" component={SubGal} />
      <Route exact path="/g5" component={SubGal} />
      <Route exact path="/g6" component={SubGal} />
      <Route exact path="/g7" component={SubGal} />
      <Route exact path="/g8" component={SubGal} />
      <Route exact path="/g9" component={SubGal} />

      </Switch>
    </Router>
  )
}

export default App
