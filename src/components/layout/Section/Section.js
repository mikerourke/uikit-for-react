import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  HTML,
  UIK,
} from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class Section extends React.Component {
  static displayName = 'Section';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    background: PropTypes.oneOf(UIK.BACKGROUND_COLORS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    overlap: PropTypes.bool,
    padding: PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge', 'remove']),
    preserveColor: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    overlap: false,
    preserveColor: false,
  };

  render() {
    const {
      as,
      background,
      className,
      flex,
      margin,
      overlap,
      padding,
      preserveColor,
      width,
      ...rest
    } = this.props;

    const paddingClass = padding.replace('remove', 'remove-vertical');
    const classes = classnames(
      className,
      'uk-section',
      buildClassName('section', background),
      buildClassName('section', paddingClass),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-section-overlap': overlap,
        'uk-section-preserve-color': preserveColor,
      },
    );

    const Element = getElementType(Section, as);
    return <Element {...rest} className={classes} />;
  }
}
