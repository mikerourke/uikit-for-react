/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';

import Base from '../../base';
import ThumbNavImage from './ThumbNavImage';

export default class ThumbNavItem extends React.Component {
  static displayName = 'ThumbNavItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: customPropTypes.restrictToChildTypes(ThumbNavImage),
  };

  static defaultProps = {
    ...Base.defaultProps,
    active: false,
    as: 'li',
  };

  render() {
    const { active, children, className, ...rest } = this.props;

    const classes = classnames(className, {
      'uk-active': active,
    });

    return (
      <Base {...rest} className={classes || undefined} component={ThumbNavItem}>
        <a href="#">{children}</a>
      </Base>
    );
  }
}
