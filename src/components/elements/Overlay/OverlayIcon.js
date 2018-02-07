import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Inverse, Margin, Text, Width } from '../../common';

export default class OverlayIcon extends React.Component {
  static displayName = 'OverlayIcon';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'span',
    className: '',
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      inverse,
      margin,
      text,
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
      Width.getClasses(width),
    );

    const Element = getElementType(OverlayIcon, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-overlay-icon=""
      />
    );
  }
}
