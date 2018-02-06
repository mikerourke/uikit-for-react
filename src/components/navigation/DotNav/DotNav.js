import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import DotNavItem from './DotNavItem';

class DotNav extends React.Component {
  static displayName = 'DotNav';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(DotNavItem),
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
    vertical: false,
  };

  static Item = DotNavItem;

  render() {
    const { as, className, vertical, ...rest } = this.props;

    const ukClass = 'uk-dotnav';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'vertical')]: vertical,
    });

    const Element = getElementType(DotNav, as);
    return <Element {...rest} className={classes} />;
  }
}

export default DotNav;
