const axios = require('axios');
const cron = require('node-cron');

const pingServer = async () => {
    try {
        const response = await axios.get('https://swyft-hk7a.onrender.com'); // Replace with your Render backend URL
        console.log('Server pinged successfully:', response.status);
    } catch (error) {
        console.error('Error pinging server:', error.message);
    }
};

// Schedule the ping every 14 minutes
cron.schedule('*/14 * * * *', pingServer);

console.log('Ping server job scheduled every 14 minutes');
