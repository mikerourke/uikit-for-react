import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, renderNavigationChild } from '../../lib';
import Base from '../Base';

export default class BreadcrumbItem extends React.Component {
  static displayName = 'BreadcrumbItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
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

    const classes = classnames(className, { 'uk-disabled': disabled });

    return (
      <Base
        {...rest}
        className={classes || undefined}
        component={BreadcrumbItem}
      >
        {renderNavigationChild(children, { href, isSpan: active })}
      </Base>
    );
  }
}
