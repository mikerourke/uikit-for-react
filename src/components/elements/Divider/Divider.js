import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import {
  Align,
  Flex,
  Inverse,
  Margin,
  Text,
  Utility,
  Width,
} from '../../common';

export default class Divider extends React.Component {
  static displayName = 'Divider';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('hr'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    icon: PropTypes.bool,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    small: PropTypes.bool,
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'hr',
    className: '',
    icon: false,
    small: false,
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      icon,
      inverse,
      margin,
      small,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Align.getClasses(align),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
      {
        'uk-divider-icon': icon,
        'uk-divider-small': small,
      },
    );

    const Element = getElementType(Divider, as);
    return <Element {...rest} className={classes} />;
  }
}
