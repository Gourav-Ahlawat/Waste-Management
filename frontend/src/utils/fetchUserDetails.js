import axios from 'axios';

const FetchUserDetails = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  try {
    const response = await axios.get('http://localhost:5000/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user details', error);
    return null;
  }
};

export default FetchUserDetails;
