/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import { get, noop } from 'lodash';
import { getElementType, getOptionsString, HTML } from '../../lib';

export default class ScrollPoint extends React.Component {
  static meta = {
    name: 'ScrollPoint',
    attribute: 'data-uikfr-scroll-element',
  };

  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.ALL_ELEMENTS),
      PropTypes.element,
      PropTypes.func,
    ]),
    className: PropTypes.string,
    duration: PropTypes.number,
    elementName: PropTypes.string,
    goTo: PropTypes.oneOf(['next', 'previous']),
    offset: PropTypes.number,
    onBeforeScroll: PropTypes.func,
    onScrolled: PropTypes.func,
    pointIndex: PropTypes.number,
  };

  static defaultProps = {
    as: 'a',
    goTo: 'next',
  };

  componentDidMount() {
    const element = this.getElement();
    UIkit.util.on(
      element,
      'beforescroll',
      get(this.props, 'onBeforeScroll', noop),
    );
    UIkit.util.on(element, 'scrolled', get(this.props, 'onScrolled', noop));
  }

  getElement = () =>
    document.querySelector(
      `[${ScrollPoint.meta.attribute}=${this.props.elementName}]`,
    );

  handleClick = () => {
    const { goTo, pointIndex } = this.props;
    const targetIndex = goTo === 'next' ? pointIndex + 1 : pointIndex - 1;
    const scrollElements = document.querySelectorAll(
      `[${ScrollPoint.meta.attribute}]`,
    );
    const targetNode = scrollElements.item(targetIndex);
    const thisNode = this.getElement();
    UIkit.scroll(thisNode).scrollTo(targetNode);
  };

  render() {
    const {
      as,
      duration,
      elementName,
      goTo,
      offset,
      onBeforeScroll,
      onScrolled,
      pointIndex,
      ...rest
    } = this.props;

    const componentOptions = getOptionsString({
      duration,
      offset,
    });

    const scrollAttribute = {
      [ScrollPoint.meta.attribute]: elementName,
    };

    const Element = getElementType(ScrollPoint, this.props);
    return (
      <Element
        {...rest}
        onClick={this.handleClick}
        data-uk-scroll={componentOptions}
        {...scrollAttribute}
      />
    );
  }
}
