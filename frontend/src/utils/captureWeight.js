import axios from 'axios';

const CaptureWeight = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  try {
    const response = await axios.get('http://localhost:5000/user/driver/captureWeight', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.message;
  } catch (error) {
    console.error('Error fetching weight data', error);
    return null;
  }
};

export default CaptureWeight;
