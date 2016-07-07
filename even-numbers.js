
export default function evenNumbers( numbers ) {

    // check for array
    if ( !Array.isArray(numbers) ) {
        throw new Error('numbers must be an array');
    }

    // check for integers
    numbers.forEach( ( val, key ) => {
        if ( !Number.isInteger(val)) {
            throw new Error('array must contain integers only');
        }
    });

    // check if numbers are even
    numbers.forEach( ( val, key ) => {
        if ( val % 2 !== 0 ) {
            throw new Error('array contains odd numbers');
        }
    });

    return numbers;
}
