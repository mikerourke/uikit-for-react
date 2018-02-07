import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';
import ThumbNavImage from './ThumbNavImage';
import ThumbNavItem from './ThumbNavItem';

export default class ThumbNav extends React.Component {
  static displayName = 'ThumbNav';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(ThumbNavItem),
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    vertical: PropTypes.bool,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
    vertical: false,
  };

  static Image = ThumbNavImage;
  static Item = ThumbNavItem;

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      text,
      width,
      vertical,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-thumbnav',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
      {
        'uk-thumbnav-vertical': vertical,
      },
    );

    const Element = getElementType(ThumbNav, as);
    return <Element {...rest} className={classes || undefined} />;
  }
}
