## rnd repo rewrite project

Tasks at hand:

- Describe the required features
- Make testing playground page with multiple inputs/outputs
- Make a module installable via npm
- Make a library which can be added as a normal script
- Make a module which can be imported as an ES6 module
- Make a module which can be required as a commonJS module
- Make an umbrella function rnd() with overloaded params
- Make separate functions for different tasks (to use them inside rnd())
- Make a builder that prepares custom library/module subset which supports only selected functionality

### Required Features

### Separate functions for different tasks

#### random() (from Math.random)

Returns a random fractional number from 0 to 1

#### genRandIntFrom0(limitInt)

Takes an integer (maximum reliable integer if the argument isn't passed). Returns a random integer between 0 (including) and passed integer (not including).

#### genRandIntBetween(int1, int2)

Takes exactly two integers and returns a random integer between the first (including) and the second one (including).

#### genRandFloatFrom0(limitFloat)

Takes a float and returns a random float between 0 (including) and passed float (not including).

#### genRandFloatBetween(float1, float2)

Takes exactly two floats and returns a random float between the first (including) and the second one (including).

####
####
