// YourComponent.stories.js

import React from 'react';
import Hexagone from "./Hexagone";

// This default export determines where your story goes in the story list
export default {
    title: 'Hexagone',
    component: Hexagone,
};

const Template = (args) => <Hexagone {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};