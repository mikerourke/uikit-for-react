/* eslint-disable global-require,no-unused-vars */
import 'uikit/src/less/uikit.theme.less';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min';
import React from 'react';
import { configure } from '@storybook/react'; // eslint-disable-line

UIkit.use(Icons);

function loadStories() {
  require('../src/stories/containers/Accordion');
  require('../src/stories/elements/Alert');
  require('../src/stories/containers/Article');
  require('../src/stories/elements/Badge');
  require('../src/stories/navigation/Breadcrumb');
  require('../src/stories/elements/Button');
  require('../src/stories/containers/Card');
  require('../src/stories/elements/Close');
  require('../src/stories/elements/Comment');
  require('../src/stories/elements/Countdown');
  require('../src/stories/containers/DescriptionList');
  require('../src/stories/elements/Divider');
  require('../src/stories/navigation/DotNav');
  require('../src/stories/elements/Drop');
  require('../src/stories/elements/Dropdown');
  require('../src/stories/layout/Grid');
  require('../src/stories/layout/GridParallax');
  require('../src/stories/elements/Label');
  require('../src/stories/containers/Lightbox');
  require('../src/stories/elements/Link');
  require('../src/stories/elements/Marker');
  require('../src/stories/containers/Modal');
  require('../src/stories/elements/Notification');
  require('../src/stories/style/Scroll');
  require('../src/stories/layout/Tab');
  require('../src/stories/elements/Upload');
}

configure(loadStories, module);
