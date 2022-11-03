'use strict';

function getCurrentState(trafficLight) {
  return trafficLight.possibleStates[trafficLight.stateIndex];
}

function getNextStateIndex(trafficLight) {

//   if (trafficLight.stateIndex === 0) {
//     return (trafficLight.stateIndex = 1);
//   } else if (trafficLight.stateIndex === 1) {
//     return (trafficLight.stateIndex = 2);
//   } else {
//     return (trafficLight.stateIndex = 0);
//   }
  
// The same but shorter with ternary operators
  return trafficLight.stateIndex === 0
    ? (trafficLight.stateIndex = 1)
    : trafficLight.stateIndex === 1
    ? (trafficLight.stateIndex = 2)
    : (trafficLight.stateIndex = 0);
}

function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {}
}

function main() {
  const trafficLight = {
    possibleStates: ['green', 'orange', 'red'],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, 'The traffic light is now', currentState);
    waitSync(1);
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
    console.log(getNextStateIndex(trafficLight));
  }
}

main();

/**
 * The output should be:

0 The traffic light is now green
1 The traffic light is now orange
2 The traffic light is now red
3 The traffic light is now green
4 The traffic light is now orange
5 The traffic light is now red

*/
