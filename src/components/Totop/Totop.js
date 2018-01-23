import React from 'react';
import PropTypes from 'prop-types';
import UIkit from 'uikit';
import { get, noop } from 'lodash';
import { InlineElement } from '../Base';

export default class Totop extends InlineElement {
  static displayName = 'Totop';

  static propTypes = {
    ...InlineElement.propTypes,
    className: PropTypes.string,
    scrollOptions: PropTypes.shape({
      duration: PropTypes.number,
      offset: PropTypes.number,
      onBeforeScroll: PropTypes.func,
      onScrolled: PropTypes.func,
    }),
    smooth: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: null,
    scrollOptions: null,
    smooth: false,
  };

  componentDidMount() {
    const element = document.querySelector('[data-uikfr-scroll-totop]');
    if (!element) return;
    UIkit.util.on(
      element,
      'beforescroll',
      get(this.props, ['scrollOptions', 'onBeforeScroll'], noop),
    );
    UIkit.util.on(
      element,
      'scrolled',
      get(this.props, ['scrollOptions', 'onScrolled'], noop),
    );
  }

  render() {
    const { smooth, ...rest } = this.props;
    return (
      <InlineElement
        {...rest}
        href="#"
        data-uk-totop
        data-uk-scroll={smooth || undefined}
        data-uikfr-scroll-totop
      />
    );
  }
}
