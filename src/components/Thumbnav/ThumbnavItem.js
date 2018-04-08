/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';

import Base from '../Base';
import ThumbnavImage from './ThumbnavImage';

export default class ThumbnavItem extends React.Component {
  static displayName = 'ThumbnavItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: customPropTypes.restrictToChildTypes(ThumbnavImage),
  };

  static defaultProps = {
    ...Base.defaultProps,
    active: false,
    as: 'li',
  };

  render() {
    const { active, children, className, ...rest } = this.props;

    const classes = classnames(className, { 'uk-active': active });

    return (
      <Base {...rest} className={classes || undefined} component={ThumbnavItem}>
        <a href="#">{children}</a>
      </Base>
    );
  }
}
