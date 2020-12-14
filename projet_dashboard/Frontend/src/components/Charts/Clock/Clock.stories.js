// YourComponent.stories.js

import React from 'react';
import Clock from './Clock';

// This default export determines where your story goes in the story list
export default {
    title: 'Clock',
    component: Clock,
};

const Template = (args) => <Clock {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};