import axios from 'axios';

const SubmitWeight = async (capturedWeight) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }

    try {
        const response = await axios.post('http://localhost:5000/user/driver/clientrequest', {
            client_name: 'Cliente 1', // Replace with actual client name data
            client_address: 'Client Address', // Replace with actual client address data
            client_id: 'Client ID', // Replace with actual client ID data
            timestamp: new Date().toISOString(), // Use current timestamp or adjust as needed
            weight: 10,
        }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data.message;
    } catch (error) {
        console.error('Error submitting weight:', error);
        throw error;
    }
};

export default SubmitWeight;
