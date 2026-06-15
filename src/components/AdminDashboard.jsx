import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Replace this URL with your actual live backend URL
      const response = await axios.get('https://clinic-backend-ajge.onrender.com//api/bookings/all', {
        headers: { 'x-admin-passcode': passcode }
      });
      
      setBookings(response.data);
      setIsAuthenticated(true);
      // Save passcode temporarily in session so refresh doesn't log them out immediately
      sessionStorage.setItem('admin_token', passcode);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid passcode or server error.');
    } finally {
      setLoading(false);
    }
  };

  // Auto-login if token exists in session storage
  useEffect(() => {
    const savedToken = sessionStorage.getItem('admin_token');
    if (savedToken) {
      setPasscode(savedToken);
      axios.get('https://clinic-backend-ajge.onrender.com//api/bookings/all', {
        headers: { 'x-admin-passcode': savedToken }
      }).then(res => {
        setBookings(res.data);
        setIsAuthenticated(true);
      }).catch(() => sessionStorage.removeItem('admin_token'));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setBookings([]);
    setPasscode('');
  };

  // 1. LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: '400px', margin: '100px auto', padding: '30px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', fontFamily: 'sans-serif' }}>
        <h2>Hub Admin Portal</h2>
        <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
          <input
            type="password"
            placeholder="Enter Admin Passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            required
          />
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
            {loading ? 'Verifying...' : 'Unlock Dashboard'}
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '15px', fontSize: '14px' }}>{error}</p>}
      </div>
    );
  }

  // 2. DASHBOARD LIVE VIEW
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid #eaeaea', paddingBottom: '15px' }}>
        <h2>🚨 Live Appointment Bookings ({bookings.length})</h2>
        <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#ff4d4f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Secure Logout
        </button>
      </div>

      {bookings.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', fontSize: '18px' }}>No bookings found in the database yet.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: '12px' }}>Patient Name</th>
                <th style={{ padding: '12px' }}>Phone</th>
                <th style={{ padding: '12px' }}>Email</th>
                <th style={{ padding: '12px' }}>Date</th>
                <th style={{ padding: '12px' }}>Time Slot</th>
                <th style={{ padding: '12px' }}>Patient Message</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{booking.name}</td>
                  <td style={{ padding: '12px' }}>
                    <a href={`tel:${booking.phone}`} style={{ color: '#0070f3', textDecoration: 'none' }}>{booking.phone}</a>
                  </td>
                  <td style={{ padding: '12px' }}>{booking.email}</td>
                  <td style={{ padding: '12px', color: '#555' }}>{booking.date}</td>
                  <td style={{ padding: '12px' }}><span style={{ background: '#e6f7ff', color: '#1890ff', padding: '4px 8px', borderRadius: '4px', fontSize: '14px', fontWeight: '500' }}>{booking.time}</span></td>
                  <td style={{ padding: '12px', color: '#666', fontStyle: booking.message ? 'normal' : 'italic' }}>
                    {booking.message || 'No custom message left.'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
