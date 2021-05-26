import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    //let resultA = 1
    let resultB = 1


    const resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={e => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={e => setB(Number(e.currentTarget.value))}/>

        <div>
            Result for a: {resultA}
        </div>

        <div>
            Result for b: {resultB}
        </div>
    </>
}




const UsersMemo = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersMemo)

export const HelpsToReactMemoExample = () => {
    console.log('HelpsToReactMemoExample')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Marta', 'Olya', 'Alex'])

    const count = () => {
        setCounter(counter + 1)
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Katya' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={count}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}
