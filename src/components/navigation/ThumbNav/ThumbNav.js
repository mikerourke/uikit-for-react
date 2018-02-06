import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import ThumbNavImage from './ThumbNavImage';
import ThumbNavItem from './ThumbNavItem';

export default class ThumbNav extends React.Component {
  static displayName = 'ThumbNav';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(ThumbNavItem),
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
    vertical: false,
  };

  static Image = ThumbNavImage;
  static Item = ThumbNavItem;

  render() {
    const { as, className, vertical, ...rest } = this.props;

    const ukClass = 'uk-thumbnav';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'vertical')]: vertical,
    });

    const Element = getElementType(ThumbNav, as);
    return <Element {...rest} className={classes} />;
  }
}
