// src/api/api.js

export const apiRequest = async (endpoint, method = 'GET', body = null) => {
    const token = localStorage.getItem('token');
  
    const res = await fetch(`/api${endpoint}`, {  // use proxy
      method,
      credentials: 'include', // Ensures cookies are sent if needed
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      ...(body && { body: JSON.stringify(body) }),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      if (res.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      throw new Error(data.message || 'API request failed');
    }
  
    return data;
  };
  