import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class Tile extends React.Component {
  static displayName = 'Tile';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('span'),
    muted: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
    muted: false,
    primary: false,
    secondary: false,
  };

  render() {
    const { className, muted, primary, secondary, ...rest } = this.props;

    const classes = classnames(className, 'uk-tile', {
      'uk-tile-default': !muted && !primary && !secondary,
      'uk-tile-muted': muted,
      'uk-tile-primary': primary,
      'uk-tile-secondary': secondary,
    });

    return <Base {...rest} className={classes} component={Tile} />;
  }
}
