import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, renderNavigationChild } from '../../lib';
import Base from '../Base';

export default class PaginationItem extends React.Component {
  static displayName = 'PaginationItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.number,
    disabled: PropTypes.bool,
    href: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    active: false,
    as: 'li',
    disabled: false,
  };

  render() {
    const { active, children, className, disabled, href, ...rest } = this.props;

    const classes = classnames(className, {
      'uk-active': active,
      'uk-disabled': disabled,
    });

    return (
      <Base
        {...rest}
        className={classes || undefined}
        component={PaginationItem}
      >
        {renderNavigationChild(children, { href, isSpan: active || disabled })}
      </Base>
    );
  }
}
