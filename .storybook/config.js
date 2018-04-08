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

const loadStoriesAlphabetically = () => {
  const allStoriesContext = require.context('../stories', true, /\.js/);

  const filesWithElements = allStoriesContext.keys().map(filePath => ({
    pathOf: path.dirname(filePath),
    nameOf: path.basename(filePath),
  }));

  const storiesToLoad = sortBy(filesWithElements, 'nameOf').reduce(
    (acc, { pathOf, nameOf }) => [...acc, `${pathOf}/${nameOf}`],
    [],
  );

  storiesToLoad.forEach(fileName => allStoriesContext(fileName));
};

function loadStories() {
  loadStoriesAlphabetically();
}

configure(loadStories, module);
