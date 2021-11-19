import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import RedirectPage from "./pages/RedirectPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:shortId" component={RedirectPage} />
    </Router>
  );
};

export default App;
