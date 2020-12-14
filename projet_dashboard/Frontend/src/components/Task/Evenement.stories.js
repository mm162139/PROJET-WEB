// YourComponent.stories.js

import React from 'react';
import Evenement from "./Evenement";

// This default export determines where your story goes in the story list
export default {
    title: 'Evenement',
    component: Evenement,
};

const Template = (args) => <Evenement {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};