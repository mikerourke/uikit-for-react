import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import {
  addEventInvoker,
  customPropTypes,
  getOptionsString,
} from '../../../lib';
import Base from '../../base';

export default class Totop extends React.Component {
  static displayName = 'Totop';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    onBeforeScroll: PropTypes.func,
    onScrolled: PropTypes.func,
    scrollDuration: PropTypes.number,
    scrollOffset: PropTypes.number,
    smooth: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
    onBeforeScroll: noop,
    onScrolled: noop,
  };

  componentDidMount() {
    const element = document.querySelector('[data-uikfr-scroll-totop]');
    if (!element) return;
    addEventInvoker(element, 'beforescroll', 'onBeforeScroll', this.props);
    addEventInvoker(element, 'scrolled', 'onScrolled', this.props);
  }

  render() {
    const { scrollDuration, scrollOffset, smooth, ...rest } = this.props;

    const scrollOptions = getOptionsString({
      duration: scrollDuration,
      offset: scrollOffset,
    });

    return (
      <Base
        {...rest}
        component={Totop}
        href="#"
        uk-totop=""
        uk-scroll={smooth ? scrollOptions : undefined}
        data-uikfr-scroll-totop=""
      />
    );
  }
}
