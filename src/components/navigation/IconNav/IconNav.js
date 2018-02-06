import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import IconNavItem from './IconNavItem';

export default class IconNav extends React.Component {
  static displayName = 'IconNav';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(IconNavItem),
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
    vertical: false,
  };

  static Item = IconNavItem;

  render() {
    const { as, className, vertical, ...rest } = this.props;

    const ukClass = 'uk-iconnav';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'vertical')]: vertical,
    });

    const Element = getElementType(IconNav, as);
    return <Element {...rest} className={classes} />;
  }
}
