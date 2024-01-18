
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import AuthProvider from './services/Auth/auth';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './pages/SignUp/SignUp';
import LiftingStateUp from './pages/LiftingStateUp/LiftingStateUp';
import PropsDrilling from './pages/PropsDrilling/PropsDrilling';
import { HOME_URL, LIFTING_STATE_UP_URL, LOGIN_URL, PROPS_DRILLING_URL, SIGN_UP_URL } from './utils/constant';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path={LOGIN_URL} element={<Login />} />
          <Route path={SIGN_UP_URL} element={<SignUp />} />

          <Route element={<PrivateRoute />}>
            <Route path={HOME_URL} element={<Home />} />
            <Route path={LIFTING_STATE_UP_URL} element={<LiftingStateUp />} />
            <Route path={PROPS_DRILLING_URL} element={<PropsDrilling />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
