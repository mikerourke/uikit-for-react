/* eslint-disable global-require,no-unused-vars */
import 'uikit/src/less/uikit.theme.less';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min';
import React from 'react';
import { configure, setAddon } from '@storybook/react'; // eslint-disable-line

UIkit.use(Icons);

function loadStories() {
  require('../src/stories/Button');
  require('../src/stories/Stuff');
}

configure(loadStories, module);
