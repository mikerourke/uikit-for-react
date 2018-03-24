import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { customPropTypes } from '../../../lib';
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
    smooth: false,
  };

  componentDidMount() {
    const element = document.querySelector('[data-uikfr-scroll-totop]');
    if (!element) return;
    UIkit.util.on(element, 'beforescroll', this.props.onBeforeScroll);
    UIkit.util.on(element, 'scrolled', this.props.onScrolled);
  }

  render() {
    const { scrollDuration, scrollOffset, smooth, ...rest } = this.props;

    return (
      <Base
        {...rest}
        component={Totop}
        href="#"
        data-uk-totop=""
        data-uk-scroll={smooth || undefined}
        data-uikfr-scroll-totop=""
        duration={scrollDuration}
        offset={scrollOffset}
      />
    );
  }
}
