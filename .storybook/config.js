/* eslint-disable global-require,no-unused-vars */
import 'uikit/src/less/uikit.theme.less';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min';
import React from 'react';
import { configure } from '@storybook/react'; // eslint-disable-line

UIkit.use(Icons);

function loadStories() {
  require('../src/stories/Accordion');
  require('../src/stories/Alert');
  require('../src/stories/Article');
  require('../src/stories/Badge');
  require('../src/stories/Breadcrumb');
  require('../src/stories/Button');
  require('../src/stories/Card');
  require('../src/stories/Close');
  require('../src/stories/Comment');
  require('../src/stories/Countdown');
  require('../src/stories/Drop');
  require('../src/stories/Dropdown');
  require('../src/stories/Grid');
  require('../src/stories/GridParallax');
  require('../src/stories/Label');
  require('../src/stories/Notification');
  require('../src/stories/Tab');
}

configure(loadStories, module);
