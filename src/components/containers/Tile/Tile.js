import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';

export default class Tile extends React.Component {
  static displayName = 'Tile';

  static propTypes = {
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    muted: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'span',
    className: '',
    muted: false,
    primary: false,
    secondary: false,
  };

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      muted,
      primary,
      secondary,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-tile',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
      {
        'uk-tile-default': !muted && !primary && !secondary,
        'uk-tile-muted': muted,
        'uk-tile-primary': primary,
        'uk-tile-secondary': secondary,
      },
    );

    const Element = getElementType(Tile, as);
    return <Element {...rest} className={classes} />;
  }
}
