import axios from 'axios';


const handler = async (event, context) => {
    const listId = 'ecd3fd2339';
    const apiKey = '51c385f9eda587cca0f93ee1b4de8600-us9';
    const body = JSON.parse(event.body);
    const { email_address } = body;
    if (!email_address) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Please provide an email address.' }),
        }
    }

    try {
        console.log("[function] event : ", event)
        const payload = {
            email_address,
            status: 'subscribed',
            FNAME: 'tasos2',
            merge_fields: event.body.merge_fields
        }
        const { data } = await axios.post(`https://us9.api.mailchimp.com/3.0/lists/${listId}/members/`, payload, {
            headers: {
                Authorization: `Basic ${apiKey}`,
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error.response.data),
        }
    }
};

export {
    handler,
}