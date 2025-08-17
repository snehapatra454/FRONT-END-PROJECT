import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
import { GuideProvider } from './context/GuideContext';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import DescriptionPage from './pages/DescriptionPage';
import Login from './components/Loginpage';
import ProfilePage from './components/ProfilePage';
import ContactPage from './components/ContactPage';

import AdminLoginPage from './pages/AdminLoginPage';
import AdminFeaturedPage from './pages/AdminFeaturedPage';
import AdminGuidePage from './pages/AdminGuidePage';
import AdminProfilePage from './pages/AdminProfilePage';
import AdminContactPage from './pages/AdminContactPage';

function App() {
  return (
    <RoleProvider>
      <GuideProvider>
        <Router>
          <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/description/:id" element={<DescriptionPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />

            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/featured" element={
              <ProtectedRoute requiredRole="admin">
                <AdminFeaturedPage />
              </ProtectedRoute>
            } />
            <Route path="/admin/guide" element={
              <ProtectedRoute requiredRole="admin">
                <AdminGuidePage />
              </ProtectedRoute>
            } />
            <Route path="/admin/profile" element={
              <ProtectedRoute requiredRole="admin">
                <AdminProfilePage />
              </ProtectedRoute>
            } />
            <Route path="/admin/contact" element={
              <ProtectedRoute requiredRole="admin">
                <AdminContactPage />
              </ProtectedRoute>
            } />
          </Routes>
          </div>
        </Router>
      </GuideProvider>
    </RoleProvider>
  );
}

export default App;