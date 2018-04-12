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
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

export default class ScrollPoint extends React.Component {
  static displayName = 'ScrollPoint';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    duration: PropTypes.number,
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
    this.ref = null;
  }

  componentDidMount() {
    addEventInvoker(this.ref, 'beforescroll', 'onBeforeScroll', this.props);
    addEventInvoker(this.ref, 'scrolled', 'onScrolled', this.props);
  }

  handleClick = () => {
    const { goTo, pointIndex } = this.props;

    const targetIndex = goTo === 'next' ? pointIndex + 1 : pointIndex - 1;
    const scrollElements = document.querySelectorAll('[uk-scroll]');
    const targetNode = scrollElements.item(targetIndex);

    UIkit.scroll(this.ref).scrollTo(targetNode);
  };

  handleRef = element => (this.ref = element);

  render() {
    const { duration, offset, pointIndex, ...rest } = this.props;

    return (
      <Ref innerRef={this.handleRef}>
        <Base
          {...rest}
          component={ScrollPoint}
          onClick={this.handleClick}
          uk-scroll={getOptionsString({ duration, offset })}
        />
      </Ref>
    );
  }
}
