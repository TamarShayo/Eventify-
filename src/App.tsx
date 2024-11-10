import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home-page/HomePage'; // ייבוא דף הבית
// import MyPlansPage from './MyPlansPage'; // ייבוא דף התוכניות שלי
// import UploadPlanPage from './UploadPlanPage'; // ייבוא דף העלאת תוכנית
// import OrdersPage from './OrdersPage'; // ייבוא דף ההזמנות

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/עמוד ראשי" element={<HomePage />} />
        {/* <Route path="/התוכניות שלי" element={<MyPlansPage />} />
        <Route path="/העלאת תוכנית" element={<UploadPlanPage />} />
        <Route path="/הזמנות" element={<OrdersPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
