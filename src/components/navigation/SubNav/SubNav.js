import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import SubNavItem from './SubNavItem';

export default class SubNav extends React.Component {
  static displayName = 'SubNav';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(SubNavItem),
    divider: PropTypes.bool,
    pill: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
    divider: false,
    pill: false,
  };

  static Item = SubNavItem;

  render() {
    const { className, divider, pill, ...rest } = this.props;

    const classes = classnames(className, 'uk-subnav', {
      'uk-subnav-divider': divider,
      'uk-subnav-pill': pill,
    });

    return <Base {...rest} className={classes} component={SubNav} />;
  }
}
