import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onClickStar={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClickStar={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClickStar={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClickStar={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClickStar={props.onClick} value={5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClickStar: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    const onClickValue = () => {props.onClickStar(props.value)}

    return (
        <span className='star' onClick={onClickValue}>
            {props.selected ? <img src='https://pngimg.com/uploads/red_star/red_star_PNG31.png'/> : <img src='https://static.vecteezy.com/system/resources/previews/001/189/159/original/rainbow-star-png.png'/>}
            {/*{props.selected ? <b>star </b> : 'star '}*/}
        </span>
    )
}