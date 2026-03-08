import app from './api/contact.js';

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Local Express API Server listening on port ${PORT}`);
});
