import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  customPropTypes,
  getElementType,
  getOptionsString,
  UIK,
} from '../../../lib';
import { Align, Flex, Inverse, Margin, Width } from '../../common';

export default class Icon extends React.Component {
  static displayName = 'Icon';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('a', 'span'),
    className: PropTypes.string,
    flex: Flex.propTypes,
    link: PropTypes.bool,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    name: PropTypes.oneOf(UIK.ICON_NAMES).isRequired,
    ratio: PropTypes.number,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'span',
    className: '',
    link: false,
  };

  render() {
    const {
      align,
      as,
      className,
      flex,
      link,
      inverse,
      margin,
      name,
      ratio,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-icon',
      Align.getClasses(align),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-icon-link': link,
      },
    );

    const componentOptions = getOptionsString({ icon: name, ratio });

    const Element = getElementType(Icon, as);
    return (
      <Element {...rest} className={classes} data-uk-icon={componentOptions} />
    );
  }
}
