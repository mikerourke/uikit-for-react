import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, renderNavigationChild } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

export default class NavItem extends React.Component {
  static displayName = 'NavItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    disabled: PropTypes.bool,
    href: PropTypes.string,
    parent: PropTypes.bool,
    title: PropTypes.node,
  };

  static defaultProps = {
    ...Base.defaultProps,
    active: false,
    as: 'li',
  };

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    const dropdowns = this.ref.querySelectorAll('[uk-dropdown]');
    if (dropdowns.length !== 0) {
      dropdowns.forEach(dropdownElement => {
        dropdownElement.removeAttribute('uk-dropdown');
      });
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      active,
      children,
      className,
      disabled,
      href,
      parent,
      title,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      'uk-active': active,
      'uk-disabled': disabled,
      'uk-parent': parent,
    });

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} className={classes || undefined} component={NavItem}>
          {parent || title ? (
            <Fragment>
              <a href={href}>{title}</a>
              {children}
            </Fragment>
          ) : (
            renderNavigationChild(children, { href })
          )}
        </Base>
      </Ref>
    );
  }
}
