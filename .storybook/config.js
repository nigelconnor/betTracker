import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('../stories/BetTrackerApp.js');
}

configure(loadStories, module);