import React from 'react';

type OnOffPropsType = {
    value: boolean
    onClick: (value: boolean) => void
}

function OnOffMemo(props: OnOffPropsType) {

    const onStyleControlled = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.value ? 'green' : 'white',
    }
    const offStyleControlled = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.value ? 'white' : 'red',
    }
    const indicatorStyleControlled = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.value ? 'green' : 'red',
    }

    const onClick = () => {
        props.onClick(true)
    }
    const offClick = () => {
        props.onClick(false)
    };

    return (
        <div>
            <div style={onStyleControlled} onClick={onClick}>On</div>
            <div style={offStyleControlled} onClick={offClick}>Off</div>
            <div style={indicatorStyleControlled}></div>
        </div>
    )
}

export const OnOff = React.memo(OnOffMemo)



