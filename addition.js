
export default function addition( numbers ) {

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

    // adding up numbers of array and returning total
    return numbers.reduce( ( prev, curr ) => {
        return prev + curr;
    });

}
