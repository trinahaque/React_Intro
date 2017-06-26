import logger from "js-logger";
import colors from "colors";

logger.useDefaults({
  formatter: function (messages, context){
    messages.map(function(value, index){
      console.log(typeof(value));
      if (typeof(value) == "string"){
        return messages[index] = value.red;
      }

      // else if ()
      // set logger debug green
      // set logger warn orange
      return;
    })
    messages.unshift(new Date().toLocaleTimeString().green);
  }
})
export default logger;
