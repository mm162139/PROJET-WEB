// YourComponent.stories.js

import React from 'react';
import Camembert from './Camembert';

// This default export determines where your story goes in the story list
export default {
    title: 'Camembert',
    component: Camembert,
};

const Template = (args) => <Camembert {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};