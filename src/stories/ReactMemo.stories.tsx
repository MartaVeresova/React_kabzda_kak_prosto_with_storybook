import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const Counter = React.memo(NewMessagesCounter)

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Marta', 'Olya', 'Alex'])

    const count = () => {
        setCounter(counter + 1)
    }
    const addUser = () => {
        const newUsers = [...users, 'Katya' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={count}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}