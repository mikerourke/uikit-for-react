/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import {
  addEventInvoker,
  customPropTypes,
  getOptionsString,
  LibraryComponent,
  HTML,
} from '../../lib';
import Base from '../Base';

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

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('scroll-point');
  }

  componentDidMount() {
    const { cssSelector } = this.libComp;
    addEventInvoker(cssSelector, 'beforescroll', 'onBeforeScroll', this.props);
    addEventInvoker(cssSelector, 'scrolled', 'onScrolled', this.props);
  }

  handleClick = () => {
    const { goTo, pointIndex } = this.props;
    const { attrName } = this.libComp;

    const targetIndex = goTo === 'next' ? pointIndex + 1 : pointIndex - 1;
    const scrollElements = document.querySelectorAll(`[${attrName}]`);
    const targetNode = scrollElements.item(targetIndex);

    UIkit.scroll(this.libComp.cssSelector).scrollTo(targetNode);
  };

  render() {
    const { duration, elementName, offset, pointIndex, ...rest } = this.props;

    return (
      <Base
        {...rest}
        component={ScrollPoint}
        onClick={this.handleClick}
        uk-scroll={getOptionsString({ duration, offset })}
        {...this.libComp.appendProps(this.props, { attrValue: elementName })}
      />
    );
  }
}
