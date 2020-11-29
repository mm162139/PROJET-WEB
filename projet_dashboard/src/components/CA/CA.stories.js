// YourComponent.stories.js

import React from 'react';
import CA from "./CA";

// This default export determines where your story goes in the story list
export default {
    title: 'CA',
    component: CA,
};

const Template = (args) => <CA {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};