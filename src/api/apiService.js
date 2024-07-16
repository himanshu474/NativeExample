
import axios from "axios";

const BASE_URL = 'http://192.168.1.21:3000'; 

export const login = async (email, password) => {
  try {
    const response = await axios.get(`${BASE_URL}/users?email=${email}&password=${password}`);
    if (response.status === 200 && response.data.length > 0) {
      return response.data[0];
    } else {
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

export const updateProfile = async (id, name, email, password) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/${id}`, {
      name,
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status !== 200) {
      throw new Error('Failed to update profile');
    }
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};