require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(process.env.PORT);
  console.log(`Server is running on port ${port}`);
});
