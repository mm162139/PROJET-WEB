// YourComponent.stories.js

import React from 'react';
import Account from "./Account";

// This default export determines where your story goes in the story list
export default {
    title: 'Account',
    component: Account,
};

const Template = (args) => <Account {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};