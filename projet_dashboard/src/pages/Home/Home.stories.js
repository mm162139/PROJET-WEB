// YourComponent.stories.js

import React from 'react';
import Home from "./Home";

// This default export determines where your story goes in the story list
export default {
    title: 'Home',
    component: Home,
};

const Template = (args) => <Home {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};