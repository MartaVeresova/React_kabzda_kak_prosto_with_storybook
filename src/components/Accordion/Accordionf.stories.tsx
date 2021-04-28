import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './ Accordion';
import {Story} from '@storybook/react';


export default {
    title: 'Accordion',
    component: Accordion,
}


const callback = action('accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbacksProps = {
    onChange: callback
}
export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
};

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
};


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
}


