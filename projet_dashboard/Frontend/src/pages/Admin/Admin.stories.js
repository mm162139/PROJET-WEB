// YourComponent.stories.js

import React from 'react';
import Admin from "./Admin";

// This default export determines where your story goes in the story list
export default {
    title: 'Admin',
    component: Admin,
};

const Template = (args) => <Admin {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};