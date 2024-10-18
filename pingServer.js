const axios = require('axios');

export default async function handler(req, res) {
    try {
        const response = await axios.get('https://swyft-hk7a.onrender.com'); // Replace with your Render backend URL
        console.log('Server pinged successfully:', response.status);
        res.status(200).json({ message: 'Ping successful', status: response.status });
    } catch (error) {
        console.error('Error pinging server:', error.message);
        res.status(500).json({ message: 'Ping failed', error: error.message });
    }
}
