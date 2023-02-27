const axios = require('axios');
const logsystem={};

logsystem.getintent= (usermessage,callback)=>{
let rasaURL='http://128.199.201.218:5500/model/parse'
let message={
  text: usermessage
}
axios.post(rasaURL, message)
  .then(response => {
    callback({
      ask:response.data.text,
      intent: response.data.intent.name,
      confidence:response.data.intent.confidence
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
/**
 * Send Message to Chatbot and Get Answer Form it.
 * 
 * @param {string} usermessage - User Message .
 * @param {function} callback - The second number to add.
 * @returns {object} The sum of the two numbers.
 */
logsystem.sendMessage=(usermessage,callback)=>{
    const rasaURL = 'http://128.199.201.218:5500/webhooks/rest/webhook';

const message = {
  sender: 'user123',
  message: usermessage,
};
    axios.post(rasaURL, message)
      .then(response => {
        // Convert the response to a JSON string and parse it to a JavaScript object
        const responseObject = JSON.parse(JSON.stringify(response.data));
        
        // Extract the text from the response object and Call the callback function with the response text
        callback({
          ask:message.message,
          reply: responseObject[0].text
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

module.exports =logsystem