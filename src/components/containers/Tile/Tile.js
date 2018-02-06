import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class Tile extends React.Component {
  static displayName = 'Tile';

  static propTypes = {
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node,
    className: PropTypes.string,
    muted: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
  };

  static defaultProps = {
    as: 'span',
    className: '',
    muted: false,
    primary: false,
    secondary: false,
  };

  render() {
    const { as, className, muted, primary, secondary, ...rest } = this.props;

    const ukClass = 'uk-tile';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'default')]: !muted && !primary && !secondary,
      [buildClassName(ukClass, 'muted')]: muted,
      [buildClassName(ukClass, 'primary')]: primary,
      [buildClassName(ukClass, 'secondary')]: secondary,
    });

    const Element = getElementType(Tile, as);
    return <Element {...rest} className={classes} />;
  }
}
