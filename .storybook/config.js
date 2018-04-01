/* eslint-disable global-require,no-unused-vars */
import 'uikit/src/less/uikit.theme.less';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min';
import React from 'react';
import { configure } from '@storybook/react'; // eslint-disable-line

UIkit.use(Icons);

function loadStories() {
  require('../stories/containers/Accordion');
  require('../stories/elements/Alert');
  require('../stories/style/Align');
  require('../stories/style/Animation');
  require('../stories/containers/Article');
  require('../stories/style/Background');
  require('../stories/elements/Badge');
  require('../stories/navigation/Breadcrumb');
  require('../stories/elements/Button');
  require('../stories/containers/Card');
  require('../stories/elements/Close');
  require('../stories/containers/Column');
  require('../stories/elements/Comment');
  require('../stories/layout/Container');
  require('../stories/elements/Countdown');
  require('../stories/style/Cover');
  require('../stories/containers/DescriptionList');
  require('../stories/elements/Divider');
  require('../stories/navigation/Dotnav');
  require('../stories/elements/Drop');
  require('../stories/elements/Dropdown');
  require('../stories/layout/Flex');
  require('../stories/layout/Grid');
  require('../stories/layout/GridParallax');
  require('../stories/elements/Heading');
  require('../stories/elements/Icon');
  require('../stories/navigation/Iconnav');
  require('../stories/style/Inverse');
  require('../stories/elements/Label');
  require('../stories/containers/Lightbox');
  require('../stories/elements/Link');
  require('../stories/containers/List');
  require('../stories/style/Margin');
  require('../stories/elements/Marker');
  require('../stories/containers/Modal');
  require('../stories/navigation/Nav');
  require('../stories/elements/Notification');
  require('../stories/containers/Offcanvas');
  require('../stories/style/Scroll');
  require('../stories/layout/Tab');
  require('../stories/elements/Upload');
}

configure(loadStories, module);
