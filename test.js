import rasa from './index.js';

rasa.baseUrl("http://128.199.201.218:5500");
rasa.parseModel("hi",res=>{
    console.log(res);
});