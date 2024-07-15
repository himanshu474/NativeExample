import axios from "axios";

const BASE_URL = 'http://192.168.1.21:3000'; // Replace with your JSON Server URL

export const login = async (email, password) => {
  try {
    const response = await axios.get(`${BASE_URL}/users?email=${email}&password=${password}`);
    if (response.status === 200 && response.data.length > 0) {
      // User found, return the first user (assuming unique email)
      return response.data[0];
    } else {
      // User not found or response not as expected
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
    throw error;
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, {
      name,
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status !== 201) {
      throw new Error('Failed to sign up');
    }
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};
