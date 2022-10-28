"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);

  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to cycles and turn it green
  
  if (currentState == 'green') {
    trafficLight.stateIndex = 1;
  } else if (currentState == 'orange') {
    trafficLight.stateIndex = 2;
  } else {
      cycle++;
      trafficLight.stateIndex = 0;
    }
}
/**
 * The output should be:
The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Shortest solution for traffic light exercise
'use strict';
const trafficLight = {
  possibleStates: ['green', 'orange', 'red'],
};

for (let cycle = 0; cycle < 2; cycle++) {
  for (
    trafficLight.stateIndex = 0;
    trafficLight.stateIndex <= 2;
    trafficLight.stateIndex++
  ) {
    const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
    console.log('The traffic light is on', currentState);
  }
}
