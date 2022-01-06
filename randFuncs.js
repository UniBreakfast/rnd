var {random} = Math

function genRandIntFrom0(limitInt = Number.MAX_SAFE_INTEGER) {
    if (!Number.isInteger(+limitInt)) {
        throw new TypeError('Argument is not an integer');
    }
    return Math.trunc(Math.random() * limitInt);
}

function genRandIntBetween(int1, int2) {
    if (!Number.isInteger(+int1) || !Number.isInteger(+int2)) {
        throw new TypeError('Both arguments must be integers');
    }
    if (arguments.length < 2) {
        throw new SyntaxError('Exactly two arguments required');
    }
    const [min, max] = int1 < int2 ? [int1, int2] : [int2, int1];
    return Math.floor(min + (max - min + 1) * Math.random());
}

function genRandFloatFrom0(limitFloat) {
    if (+limitFloat != +limitFloat){
        throw new TypeError('Argument is not a float number');
    }
    return Math.random() * limitFloat;
}

function genRandFloatBetween(float1, float2) {
    if (Number.isNaN(+float1) || Number.isNaN(+float2)){
        throw new TypeError('Both arguments must be float numbers');
    }
    if (arguments.length < 2) {
        throw new SyntaxError('Exactly two arguments required');
    }
    const [min, max] = float1 < float2 ? [float1, float2] : [float2, float1];
    return min + (max - min) * Math.random();
}

console.log(genRandFloatBetween(1.22, 2.33));
