let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'college-finder-client.herokuapp.com':
        APIURL = 'https://college-finder-server.herokuapp.com'
}

export default APIURL;