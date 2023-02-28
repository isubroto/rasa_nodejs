# Creating a Chatbot fot Rasa with Node.js
## Introduction
Rasa is an open source conversational AI framework that allows developers to build and deploy chatbots and voice assistants. Rasa offers several language-specific APIs to interact with the framework, including a Node.js API.\
The Rasa Node.js API allows you to integrate Rasa into your Node.js applications and interact with your Rasa chatbot or voice assistant through HTTP requests. With this API, you can send messages to your chatbot, receive responses, and track conversation history.

## Installation
To use the Rasa Node.js API, you'll need to install the rasajs package, which is a rasa api that gives you access rasa server. Install it by running npm by running the following command:
``` code
npm i rasajs
```
### Import
Once you have rasajs installed, you can use it to send HTTP requests to your Rasa server. 
```javascript
import rasa from 'rasajs';
or
const rasa= require('rasajs');
```
### Setup
After import you have to initialize the url of rasa
```javascript
rasa.baseUrl("http://localhost:5005");
```
### Chat With Rasa
 ```javascript
rasa.parseModel("hi",res=>{
    console.log(res);
});
```
Answer should be in json format
```code
{ text: 'hi', reply: 'Hey! How are you?' }
```
