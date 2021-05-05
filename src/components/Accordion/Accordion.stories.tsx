import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './ Accordion';
import {Story} from '@storybook/react';


const GetCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {...GetCategoryObj('Events')},
        onClick: {...GetCategoryObj('Events')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')},
    }
}


const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}
export const UsersCollapsedMode = Template.bind({});
UsersCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: [],
    onClick: (onClickCallback)
};

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [
        {title: 'Marta', value: 1},
        {title: 'Pavel', value: 2},
        {title: 'Olga', value: 3},
        {title: 'Irina', value: 4}
    ],
    onClick: (onClickCallback)
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: 'Marta', value: 1},
                          {title: 'Pavel', value: 2},
                          {title: 'Olga', value: 3},
                          {title: 'Irina', value: 4}
                      ]}
                      onClick={onClickCallback}
    />
}
ModeChanging.args = {
    titleValue: 'Users',
}

/*export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion
    titleValue="Menu"
    collapsed={true}
    onChange={callback}
    items={[]}
    onClick={onClickCallback}
/>
export const UsersUncollapsedMode = () => <Accordion
    titleValue="Users"
    collapsed={false}
    onChange={callback}
    items={[
        {title: 'Marta', value: 1},
        {title: 'Pavel', value: 2},
        {title: 'Olga', value: 3},
        {title: 'Irina', value: 4}
    ]}
    onClick={onClickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue="Menu"
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: 'Marta', value: 1},
            {title: 'Pavel', value: 2},
            {title: 'Olga', value: 3},
            {title: 'Irina', value: 4}
        ]}
        onClick={onClickCallback}
    />
}*/




