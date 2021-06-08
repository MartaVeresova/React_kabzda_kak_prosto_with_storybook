import React, {useState} from 'react'; //1

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('generateData')
    return 1
}

export const Example1 = () => {
    console.log('Example')
    const [counter, setCounter] = useState(generateData) // [1, fn(newValue){}]

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}