/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import {
  addEventInvoker,
  customPropTypes,
  getOptionsString,
  HTML,
} from '../../../lib';
import Base from '../../base';

export default class ScrollPoint extends React.Component {
  static displayName = 'ScrollPoint';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    duration: PropTypes.number,
    elementName: PropTypes.string,
    goTo: PropTypes.oneOf(['next', 'previous']),
    offset: PropTypes.number,
    onBeforeScroll: PropTypes.func,
    onScrolled: PropTypes.func,
    pointIndex: PropTypes.number,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
    goTo: 'next',
    onBeforeScroll: noop,
    onScrolled: noop,
  };

  componentDidMount() {
    const element = this.getElement();
    addEventInvoker(element, 'beforescroll', 'onBeforeScroll', this.props);
    addEventInvoker(element, 'scrolled', 'onScrolled', this.props);
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
    const { duration, elementName, offset, pointIndex, ...rest } = this.props;

    return (
      <Base
        {...rest}
        baseRef={this.handleRef}
        component={ScrollPoint}
        onClick={this.handleClick}
        uk-scroll={getOptionsString({ duration, offset })}
        data-uikfr-scroll-element={elementName}
      />
    );
  }
}
