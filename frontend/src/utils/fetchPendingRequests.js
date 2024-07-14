import axios from 'axios';

const FetchPendingRequests = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  try {
    const response = await axios.get('http://localhost:5000/user/managerops/requests', {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Pending requests:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details', error);
    return null;
  }
};

export default FetchPendingRequests;
