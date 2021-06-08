import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample')
    const [fake, setFake] = useState(1) //
    const [counter, setCounter] = useState(1) //

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (as componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}


export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [fake, setFake] = useState(1) //
    const [counter, setCounter] = useState(1) //


    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state +1)
        }, 1000)
    }, [])


    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}