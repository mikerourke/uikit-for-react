// TODO: Finish this, this thing is a beast.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getOptionsString,
  joinListProp,
  restrictToChildTypes,
  UIK,
} from '../../../lib/index';
import { BlockElement } from '../../base/index';

export default class Navbar extends React.Component {
  static displayName = 'Navbar';

  static propTypes = {
    ...BlockElement.propTypes,
    boundaryAlign: PropTypes.bool,
    children: restrictToChildTypes(),
    className: PropTypes.string,
    delayHide: PropTypes.number,
    delayShow: PropTypes.number,
    dropbar: PropTypes.bool,
    dropbarMode: PropTypes.oneOf(['push', 'slide']),
    dropdownAlign: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
    duration: PropTypes.number,
    mode: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.MODES),
      PropTypes.arrayOf(UIK.MODES),
    ]),
    offset: PropTypes.number,
    selectorBoundary: PropTypes.string,
    transparent: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    boundaryAlign: false,
    className: null,
    delayHide: null,
    delayShow: null,
    dropbar: false,
    dropbarMode: null,
    dropdownAlign: null,
    duration: null,
    mode: null,
    offset: null,
    selectorBoundary: null,
    transparent: false,
  };

  render() {
    const {
      boundaryAlign,
      className,
      delayHide,
      delayShow,
      dropbar,
      dropbarMode,
      dropdownAlign,
      duration,
      mode,
      offset,
      selectorBoundary,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName('navbar', 'container'),
    );

    const componentOptions = getOptionsString({
      align: dropdownAlign,
      boundary: selectorBoundary,
      boundaryAlign,
      delayHide,
      delayShow,
      dropbar,
      dropbarMode,
      duration,
      mode: joinListProp(mode, ','),
      offset,
    });

    return (
      <BlockElement
        {...rest}
        as="nav"
        className={classes || undefined}
        data-uk-navbar={componentOptions}
      />
    );
  }
}
