// YourComponent.stories.js

import React from 'react';
import DayWork from "./DayWork";

// This default export determines where your story goes in the story list
export default {
    title: 'DayWork',
    component: DayWork,
};

const Template = (args) => <DayWork {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};