import botend from "./fixtures/botend.js";
import tracker from "./fixtures/tracker.js";
import models from "./fixtures/models.js";
const rasa={};
rasa.sendMessage = botend.message;
rasa.entry=botend.index;
rasa.addEvent=tracker.appendEvent;
rasa.resetEvent=tracker.replaceEvent;
rasa.ConversionTracker=tracker.retriveConversionTracker;
rasa.chatHistory=tracker.chatHistory;
rasa.replayDomain=tracker.actionConversation;
rasa.injectIntent=tracker.injectIntent;
rasa.evaluateStories=models.evaluateStories;
rasa.replaceModel=models.replace;
rasa.version=models.version;
rasa.domain=models.domain;
rasa.status=models.status;




export {rasa as default}