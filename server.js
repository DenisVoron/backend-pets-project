const app = require('./app');

const { PORT = 3000 } = process.env;


const start = async () => {
    try {
        app.listen(PORT, (error) => {
            if (error) {
                console.error('Error at server Launch:', error)
            };
            console.log("Database connection successful")
        })
    } catch (error) {
        console.error(`Failed to launch application with error ${error.message}`);
    }
};

start();