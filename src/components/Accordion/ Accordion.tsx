import React, {MouseEvent} from 'react';

export type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Elements that are showed when accordion is opened (not collapsed)
     */
    onChange: () => void
    items: ItemsType[]
    onClick: (value: any) => void
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                collapsed={props.collapsed}
                onChange={props.onChange}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody
                items={props.items}
                onClick={props.onClick}
            />}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickCollapsed = (e: MouseEvent<HTMLDivElement>) => {
        props.onChange()
    }

    return (
        <div
            onClick={onClickCollapsed}
            style={{color: props.color ? props.color : 'black'}}
        >
            <h3>{props.title}</h3>
        </div>
    )
}

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {
                props.items.map((i, index) => <li key={index} onClick={() => {
                    props.onClick(i.value)
                }}>{i.title}</li>)
            }
        </ul>
    )
}
