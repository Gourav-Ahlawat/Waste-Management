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

    console.log('CaptureWeight response:', response.data); // Debugging log

    // Ensure response contains weight field
    if (response.data && typeof response.data.weight === 'string') {
      return { weight: response.data.weight };
    } else {
      console.warn('Unexpected response format from weight capture endpoint');
      return null;
    }
  } catch (error) {
    console.error('Error fetching weight data', error);
    return null;
  }
};

export default CaptureWeight;
