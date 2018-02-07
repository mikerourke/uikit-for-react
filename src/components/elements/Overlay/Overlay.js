import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, HTML } from '../../../lib';
import { Flex, Inverse, Margin, Position, Text, Width } from '../../common';
import OverlayContext from './OverlayContext';
import OverlayIcon from './OverlayIcon';
import OverlayImage from './OverlayImage';

export default class Overlay extends React.Component {
  static displayName = 'Overlay';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    position: Position.propTypes.isRequired,
    primary: ExtraPropTypes.mutuallyExclusiveTrueProps('primary', 'simple'),
    simple: PropTypes.bool,
    text: Text.propTypes,
    width: Width.propTypes,
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
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      position,
      primary,
      simple,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-overlay',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Position.getClasses(position),
      Text.getClasses(text),
      Width.getClasses(width),
      {
        'uk-overlay-primary': primary,
        'uk-overlay-default': simple,
      },
    );

    const Element = getElementType(Overlay, as);
    return <Element {...rest} className={classes} />;
  }
}
