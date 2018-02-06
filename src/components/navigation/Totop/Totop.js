import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { customPropTypes, getElementType } from '../../../lib';

export default class Totop extends React.Component {
  static displayName = 'Totop';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a'),
    className: PropTypes.string,
    onBeforeScroll: PropTypes.func,
    onScrolled: PropTypes.func,
    scrollDuration: PropTypes.number,
    scrollOffset: PropTypes.number,
    smooth: PropTypes.bool,
  };

  static defaultProps = {
    as: 'a',
    className: '',
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
    const {
      as,
      onBeforeScroll,
      onScrolled,
      scrollDuration,
      scrollOffset,
      smooth,
      ...rest
    } = this.props;

    const Element = getElementType(Totop, this.props);
    return (
      <Element
        {...rest}
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
