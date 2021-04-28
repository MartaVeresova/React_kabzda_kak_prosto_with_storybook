import React, {useState} from 'react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff value={true} onClick={callback}/>
export const OffMode = () => <OnOff value={false} onClick={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff value={value} onClick={setValue}/>
}


/*
const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    ...HeaderStories.LoggedOut.args,
};
*/
