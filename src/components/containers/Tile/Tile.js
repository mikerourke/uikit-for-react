import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';

export default class Tile extends React.Component {
  static displayName = 'Tile';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    muted: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    muted: false,
    primary: false,
    secondary: false,
  };

  render() {
    const { className, muted, primary, secondary, ...rest } = this.props;

    const ukClass = 'uk-tile';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'default')]: !muted && !primary && !secondary,
      [buildClassName(ukClass, 'muted')]: muted,
      [buildClassName(ukClass, 'primary')]: primary,
      [buildClassName(ukClass, 'secondary')]: secondary,
    });

    return (
      <BlockElement {...rest} as="span" className={classes} />
    );
  }
}
