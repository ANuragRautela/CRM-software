import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/Login.tsx';
import MainLayout from './components/layout/Mainlayout.tsx';
import Dashboard from './components/dashboard/Dashboard.tsx';
import Leads from './components/leads/Leads.tsx';
import Customers from './components/customers/Customers.tsx';
import Products from './components/products/Products.tsx';
import Sales from './components/sales/Sales.tsx';
import AdminOrders from './components/orders/AdminOrders.tsx';
import Bills from './components/bills/Bills.tsx';
import Tasks from './components/tasks/Tasks.tsx';
import Payments from './components/payment/Payments.tsx';
import Feedback from './components/feedback/Feedback.tsx';
import AdminNotifications from './components/notification/AdminNotifications.tsx';
import AdminSettings from './components/setting/AdminSettings.tsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="sales" element={<Sales />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="bills" element={<Bills />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="payments" element={<Payments />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
