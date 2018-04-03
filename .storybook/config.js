/* eslint-disable global-require,no-unused-vars */
'use strict';

import path from 'path';
import sortBy from 'lodash/sortBy';
import 'uikit/src/less/uikit.theme.less';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min';
import React from 'react';
import { configure } from '@storybook/react'; // eslint-disable-line

UIkit.use(Icons);

const contextByGroupName = {
  containers: require.context('../stories/containers', false, /\.js/),
  elements: require.context('../stories/elements', false, /\.js/),
  layout: require.context('../stories/layout', false, /\.js/),
  navigation: require.context('../stories/navigation', false, /\.js/),
  style: require.context('../stories/style', false, /\.js/),
};

const loadStoriesByGroup = groupName => {
  const groupContext = contextByGroupName[groupName];
  groupContext.keys().forEach(fileName => groupContext(fileName));
};

const loadStoriesAlphabetically = () => {
  const allStoriesContext = require.context('../stories', true, /\.js/);

  const filesWithElements = allStoriesContext.keys().map(groupFilePath => ({
    pathOf: path.dirname(groupFilePath),
    nameOf: path.basename(groupFilePath),
  }));

  const storiesToLoad = sortBy(filesWithElements, 'nameOf').reduce(
    (acc, { pathOf, nameOf }) => [...acc, `${pathOf}/${nameOf}`],
    [],
  );

  storiesToLoad.forEach(fileName => allStoriesContext(fileName));
};

function loadStories() {
  // loadStoriesAlphabetically();
  loadStoriesByGroup('containers');
  // loadStoriesByGroup('elements');
  // loadStoriesByGroup('layout');
  // loadStoriesByGroup('navigation');
  // loadStoriesByGroup('style');
}

configure(loadStories, module);
