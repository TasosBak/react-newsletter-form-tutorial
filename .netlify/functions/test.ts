import axios from 'axios';

// const handler = async (event, context) => {
//     console.log("test works!")
// };

exports.handler = async function (event, context) {

    return {
        statusCode: 200,
        body: JSON.stringify({message: 'Hello World!!'})
    }
    
}


