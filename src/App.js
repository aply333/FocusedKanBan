import KanBan from "./KanBan";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./accountRoutes/login";
import Dashboard from "./accountRoutes/dashboard";
import PrivateRoute from "./accountRoutes/components/auth/privateRoute";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/board" component={KanBan} />
    </Router>
  );
}
export default App;
