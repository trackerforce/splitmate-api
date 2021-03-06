const { app } = require('./app');
const http = require('http');
const Pusher = require('./pusher');

const port = process.env.PORT;
const server = http.createServer(app);

server.listen(port, () => {
    new Pusher(server);
    // eslint-disable-next-line no-console
    console.log('Server is up on port ' + port);
});