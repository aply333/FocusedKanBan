import KanBan from "./KanBan";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./accountRoutes/login";
import Dashboard from "./accountRoutes/dashboard";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/board" component={KanBan} />
    </Router>
  );
}
export default App;
