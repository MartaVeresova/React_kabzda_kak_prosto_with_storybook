import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
    //component: input,
}


export const UncontrolledInput = () => <input/>
export const TrackValueUncontrolledInput = () => {

    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input value={value} onChange={onChange}/> = {value}</>
}
export const GetValueUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button
            onClick={save}>
            save
        </button>
        = actual value: {value}</>
}


export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeValue}/>
}
export const ControlledCheckbox = () => {
    const [parentChecked, setParentChecked] = useState<boolean>(false)
    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setParentChecked(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentChecked} onChange={onChangeChecked}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={'it-inkubator.by'}/>


