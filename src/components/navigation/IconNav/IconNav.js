import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import IconNavItem from './IconNavItem';

export default class IconNav extends React.Component {
  static displayName = 'IconNav';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(IconNavItem),
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
    vertical: false,
  };

  static Item = IconNavItem;

  render() {
    const { className, vertical, ...rest } = this.props;

    const classes = classnames(className, 'uk-iconnav', {
      'uk-iconnav-vertical': vertical,
    });

    return <Base {...rest} className={classes} component={IconNav} />;
  }
}
