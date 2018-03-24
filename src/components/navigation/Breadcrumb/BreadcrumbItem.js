import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class BreadcrumbItem extends React.Component {
  static displayName = 'BreadcrumbItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
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
      'uk-disabled': disabled,
    });

    const InnerElement = active ? 'span' : 'a';
    return (
      <Base
        {...rest}
        className={classes || undefined}
        component={BreadcrumbItem}
      >
        <InnerElement href={href}>{children}</InnerElement>
      </Base>
    );
  }
}
