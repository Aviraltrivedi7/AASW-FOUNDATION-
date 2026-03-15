require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`\n================================`);
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`🩺 API health check: http://localhost:${PORT}/api/v1/health`);
    console.log(`🌐 Website: http://localhost:${PORT}`);
    console.log(`================================\n`);
});
