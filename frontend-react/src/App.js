
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
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {
  return (
    <RecoilRoot>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </RecoilRoot>
  )
}

export default App;
