
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

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* Other routes */}
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
