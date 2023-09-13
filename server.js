const express = require('express');
const app = express();

app.use(express.static('public'));

const port = 3000; // You can use any port you prefer

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});