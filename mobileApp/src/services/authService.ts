import { REACT_APP_API_URL } from '@env'; 

const authService = {
  login: async (username: string, password: string) => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); 
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  },

  register: async (username: string, password: string) => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  },
};

export default authService;
