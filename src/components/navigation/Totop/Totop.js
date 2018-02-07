import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import { customPropTypes, getElementType, getValidProps } from '../../../lib';
import { Align, Flex, Inverse, Margin, Text, Width } from '../../common';

export default class Totop extends React.Component {
  static displayName = 'Totop';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    onBeforeScroll: PropTypes.func,
    onScrolled: PropTypes.func,
    scrollDuration: PropTypes.number,
    scrollOffset: PropTypes.number,
    smooth: PropTypes.bool,
    text: Text.propTypes,
    width: Width.propTypes,
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
      className,
      flex,
      inverse,
      margin,
      scrollDuration,
      scrollOffset,
      smooth,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
    );

    const Element = getElementType(Totop, as);
    return (
      <Element
        {...getValidProps(Totop, rest)}
        className={classes || undefined}
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
