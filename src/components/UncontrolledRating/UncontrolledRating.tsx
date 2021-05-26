import React, {useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
export type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

function UncontrolledRating(props: UncontrolledRatingPropsType) {
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} setValue={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} setValue={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} setValue={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} setValue={() => {setValue(5); props.onChange(5)}}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    const onClickSetValue = () => {props.setValue()}

    return (
        <span className='star' onClick={onClickSetValue}>
                    {props.selected ? <img src="https://img.icons8.com/material/452/star--v1.png" width={'5%'}/> :
                        <img src="https://img.icons8.com/ios/452/star--v1.png" width={'5%'}/>}
                </span>
    )
}
