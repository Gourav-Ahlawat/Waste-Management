import axios from 'axios';

const SubmitWeight = async (weight) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }

    try {
        const response = await axios.post('http://localhost:5000/user/driver/clientrequest', {
            client_name: 'Cliente 1',
            client_address: 'Client Address',
            client_id: 'Client ID',
            timestamp: new Date().toISOString(),
            weight: weight,
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
