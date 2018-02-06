import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import SubNavItem from './SubNavItem';

export default class SubNav extends React.Component {
  static displayName = 'SubNav';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(SubNavItem),
    className: PropTypes.string,
    divider: PropTypes.bool,
    pill: PropTypes.bool,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
    divider: false,
    pill: false,
  };

  static Item = SubNavItem;

  render() {
    const { as, className, divider, pill, ...rest } = this.props;

    const classes = classnames(className, 'uk-subnav', {
      [buildClassName('subnav', 'divider')]: divider,
      [buildClassName('subnav', 'pill')]: pill,
    });

    const Element = getElementType(SubNav, as);
    return <Element {...rest} className={classes} />;
  }
}
