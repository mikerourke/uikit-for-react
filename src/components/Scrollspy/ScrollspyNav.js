import UIkit from 'uikit';
import PropTypes from 'prop-types';
import { addEventInvoker } from '../../lib';

export default class ScrollspyNav {
  static displayName = 'ScrollspyNav';

  static propTypes = {
    closest: PropTypes.string,
    clsActive: PropTypes.string,
    offset: PropTypes.number,
    onItemActive: PropTypes.func,
    overflow: PropTypes.bool,
    scroll: PropTypes.bool,
  };

  static initialize(navRef, props) {
    const {
      closest,
      clsActive,
      offset,
      onItemActive,
      overflow,
      scroll,
    } = props;

    if (onItemActive) {
      addEventInvoker(navRef, 'active', 'onItemActive', props);
    }

    UIkit.scrollspyNav(navRef, {
      closest,
      cls: clsActive,
      offset,
      overflow,
      scroll,
    });
  }
}
