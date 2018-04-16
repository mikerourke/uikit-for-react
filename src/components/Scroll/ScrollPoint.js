/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import isNil from 'lodash/isNil';
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
    goTo: ExtraPropTypes.and([
      PropTypes.oneOfType([
        PropTypes.oneOf(['next', 'previous']),
        PropTypes.string,
      ]),
      props => {
        const { goTo } = props;
        if (!['next', 'previous'].includes(goTo)) {
          if (goTo.charAt(0) !== '#') {
            return new Error(
              `The goTo prop is missing a hash, it needs to be #${goTo}.`,
            );
          }
          return null;
        }
        return null;
      },
    ]),
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
    this.scroll = null;
  }

  componentDidMount() {
    this.scroll = UIkit.scroll(this.ref);
    addEventInvoker(this.scroll, 'beforescroll', 'onBeforeScroll', this.props);
    addEventInvoker(this.scroll, 'scrolled', 'onScrolled', this.props);
  }

  handleClick = event => {
    event.preventDefault();
    const { goTo, pointIndex } = this.props;

    const targetIndex = {
      next: pointIndex + 1,
      previous: pointIndex - 1,
      default: null,
    }[goTo];

    const scrollElements = document.querySelectorAll('[uk-scroll]');
    const targetNode = isNil(targetIndex)
      ? goTo
      : scrollElements.item(targetIndex);

    // TODO: Fix this, its firing the onScrolled event twice due to UIkit specifying a click handler.
    this.scroll.scrollTo(targetNode);
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
