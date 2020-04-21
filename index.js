const path = require('path')
const { STATUS_CODES } = require('http')
exports.handler = (event, context, callback) => {
    const { request } = event.Records[0].cf
    const htmlExtRegex = /(.*)\.html?$/
    
    if (htmlExtRegex.test(request.uri)) {
        const uri = request.uri.replace(htmlExtRegex, '$1')
        return callback(null, redirect(uri))
    }
    if (!path.extname(request.uri)) {
        request.uri += '.html';
        request.uri = request.uri.toLowerCase();
    }
    callback(null, request)
}

function redirect(to) {
    return {
        status: '301',
        statusDescription: STATUS_CODES['301'],
        headers: {
            location: [{ key: 'Location', value: to }]
        }
    }
}
    
