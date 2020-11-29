// YourComponent.stories.js

import React from 'react';
import Age from "./Age";

// This default export determines where your story goes in the story list
export default {
    title: 'Age',
    component: Age,
};

const Template = (args) => <Age {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};