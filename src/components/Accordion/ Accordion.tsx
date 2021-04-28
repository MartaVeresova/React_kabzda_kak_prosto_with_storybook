import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Elements that are showed when accordion is opened (not collapsed)
     */
    onChange: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                collapsed={props.collapsed}
                onClick={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickCollapsed = () => {props.onClick(!props.collapsed)}

    return (
        <div onClick={onClickCollapsed}>
            <h3>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

    )
}
