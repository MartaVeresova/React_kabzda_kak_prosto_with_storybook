import React, {MouseEvent} from 'react';


export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Elements that are showed when accordion is opened (not collapsed)
     */
    onChange: () => void
    /**
     *
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                collapsed={props.collapsed}
                onClick={props.onChange}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickCollapsed = (e: MouseEvent<HTMLDivElement>) => {
        props.onClick()
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

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
