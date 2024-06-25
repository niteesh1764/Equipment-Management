import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StaffHome from './pages/StaffHomePage';
import RegisterUser from './pages/RegistrationPage';
import BookingPage from './pages/BookingPage.jsx';
import './App.css';
import NotFound from './pages/NotFound';
import { AuthProvider } from './Util/Context';
import RequireAuth from './Util/RequireAuth.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                <Routes>
                    <Route exact path="/register" element={<RegisterUser/>} />
                    <Route exact path="*" element={<NotFound/>} />
                    <Route exact path="/staffhome" element={<RequireAuth><StaffHome /></RequireAuth>} />
                    <Route exact path="/doctorhome" element={<RequireAuth><BookingPage /></RequireAuth>} />
                    <Route exact path="/" element={<LoginPage/>} />
                </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;