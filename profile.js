async function test (event, context) {
    return {
        statusCode: 200,
        body : JSON.stringify( event, '\n', 4)
    }
}

module.exports = { test }