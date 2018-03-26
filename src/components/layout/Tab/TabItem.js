import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isObject from 'lodash/isObject';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class TabItem extends React.Component {
  static displayName = 'TabItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    href: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    active: false,
    as: 'li',
    disabled: false,
    href: '#',
  };

  render() {
    const { active, children, className, disabled, href, ...rest } = this.props;

    const classes = classnames(className, {
      'uk-active': active,
      'uk-disabled': disabled,
    });

    return (
      <Base {...rest} className={classes} component={TabItem}>
        {isObject(children) ? children : <a href={href}>{children}</a>}
      </Base>
    );
  }
}
