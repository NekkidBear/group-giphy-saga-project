import TrendingTest from "../../trendingTest/TrendingTest.jsx";
import Favorites from "../App/Favorites_View/Favorites.jsx";
import {HashRouter as Router,Route,Link} from "react-router-dom/cjs/react-router-dom.min.js";
import SearchView from '../SearchView/SearchViewForm.jsx';

function App() {
  return (
    <div>
      <Router>
        <h1>Giphy Search!</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Giphy Home</Link>
            </li>
            <li>
              <Link to="/favorites">My Favorite Giphys</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/">
          <TrendingTest />
        </Route>
        <Route exact path="/search">
          <SearchView />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
