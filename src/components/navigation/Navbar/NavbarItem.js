import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { buildClassName, hasChildType } from '../../../lib';
import { BlockElement, InlineElement } from '../../base';
import NavbarDropdown from './NavbarDropdown';
import NavbarSubtitle from './NavbarSubtitle';

export default class NavbarItem extends React.Component {
  static displayName = 'NavbarItem';

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    active: false,
    className: '',
    href: '#',
  };

  render() {
    const { active, children, className, href, ...rest } = this.props;
    const classes = classnames(className, {
      [buildClassName('active')]: active,
    });
    const hasDropdown = hasChildType(children, NavbarDropdown);
    const hasSubtitle = hasChildType(children, NavbarDropdown);
    return (
      <BlockElement {...rest} as="li" className={classes}>
        {hasDropdown ? (
          children
        ) : (
          <InlineElement as="a" href={href}>
            {hasSubtitle ? <div>{children}</div> : children}
          </InlineElement>
        )}
      </BlockElement>
    );
  }
}
