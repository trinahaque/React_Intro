import logger from "./logger";
function hello(name="oscar"){
  logger.debug(name);
}

// default parameters, do not have to worry about undefined input
hello();
hello('goose');


// multiple parameters
function SpreadExample(...spread){
  logger.debug(spread);
  spread.forEach(function(value){
    logger.debug(value);
  })
}

SpreadExample(1,2,3,4);
SpreadExample(31,1);
