/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import {
  customPropTypes,
  getElementType,
  getOptionsString,
  getValidProps,
  HTML,
} from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class ScrollPoint extends React.Component {
  static displayName = 'ScrollPoint';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    className: PropTypes.string,
    duration: PropTypes.number,
    elementName: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    goTo: PropTypes.oneOf(['next', 'previous']),
    margin: Margin.propTypes,
    offset: PropTypes.number,
    onBeforeScroll: PropTypes.func,
    onScrolled: PropTypes.func,
    pointIndex: PropTypes.number,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'a',
    className: '',
    goTo: 'next',
    onBeforeScroll: noop,
    onScrolled: noop,
  };

  componentDidMount() {
    const element = this.getElement();
    UIkit.util.on(element, 'beforescroll', this.props.onBeforeScroll);
    UIkit.util.on(element, 'scrolled', this.props.onScrolled);
  }

  getElement = () =>
    document.querySelector(
      `[data-uikfr-scroll-element=${this.props.elementName}]`,
    );

  handleClick = () => {
    const { goTo, pointIndex } = this.props;
    const targetIndex = goTo === 'next' ? pointIndex + 1 : pointIndex - 1;
    const scrollElements = document.querySelectorAll(
      '[data-uikfr-scroll-element]',
    );
    const targetNode = scrollElements.item(targetIndex);
    const thisNode = this.getElement();
    UIkit.scroll(thisNode).scrollTo(targetNode);
  };

  handleRef = element => (this.ref = element);

  render() {
    const {
      as,
      className,
      duration,
      elementName,
      flex,
      inverse,
      margin,
      offset,
      pointIndex,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
    );

    const componentOptions = getOptionsString({ duration, offset });

    const Element = getElementType(ScrollPoint, as);
    return (
      <Element
        {...getValidProps(ScrollPoint, rest)}
        className={classes || undefined}
        onClick={this.handleClick}
        ref={this.handleRef}
        data-uk-scroll={componentOptions}
        data-uikfr-scroll-element={elementName}
      />
    );
  }
}
