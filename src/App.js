import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./accountRoutes/login";
import Dashboard from "./accountRoutes/dashboard";
import PrivateRoute from "./accountRoutes/components/auth/privateRoute";
import KanBan from "./accountRoutes/board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <Router>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/board" component={KanBan} />
    </Router>
    </DndProvider>
  );
}
export default App;
