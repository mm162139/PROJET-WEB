// YourComponent.stories.js

import React from 'react';
import FormAdmin from "./FormAdmin";

// This default export determines where your story goes in the story list
export default {
    title: 'FormAdmin',
    component: FormAdmin,
};

const Template = (args) => <FormAdmin {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};