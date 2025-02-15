const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middlewire
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('safeFunds server')
})

app.listen(port, () => {
    console.log(`safeFunds is sitting on port ${port}`);
})