import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  HTML,
} from '../../../lib';
import { Position } from '../../common';
import OverlayContext from './OverlayContext';
import OverlayIcon from './OverlayIcon';
import OverlayImage from './OverlayImage';

export default class Overlay extends React.Component {
  static displayName = 'Overlay';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    position: Position.propTypes.isRequired,
    primary: ExtraPropTypes.mutuallyExclusiveTrueProps('primary', 'simple'),
    simple: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    primary: false,
    simple: false,
  };

  static Context = OverlayContext;
  static Icon = OverlayIcon;
  static Image = OverlayImage;

  render() {
    const { as, className, primary, simple, ...rest } = this.props;

    const ukClass = 'uk-overlay';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'primary')]: primary,
      [buildClassName(ukClass, 'default')]: simple,
    });

    const Element = getElementType(Overlay, this.props);
    return <Element {...rest} className={classes} />;
  }
}
