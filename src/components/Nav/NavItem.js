import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  customPropTypes,
  LibraryComponent,
  renderNavigationChild,
} from '../../lib';
import Base from '../Base';

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
    this.libComp = new LibraryComponent('nav-item');
  }

  componentDidMount() {
    const dropdowns = this.libComp.findAllChildrenWithName('dropdown');
    if (dropdowns.length !== 0) {
      dropdowns.forEach(dropdownElement => {
        dropdownElement.removeAttribute('uk-dropdown');
      });
    }
  }

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
      <Base
        {...rest}
        className={classes || undefined}
        component={NavItem}
        {...this.libComp.appendProps(this.props)}
      >
        {parent || title ? (
          <Fragment>
            <a href={href}>{title}</a>
            {children}
          </Fragment>
        ) : (
          renderNavigationChild(children, { href })
        )}
      </Base>
    );
  }
}
