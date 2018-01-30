import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isObject } from 'lodash';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';

export default class SubNavItem extends React.Component {
  static displayName = 'SubNavItem';

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
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

    return (
      <BlockElement {...rest} as="li" className={classes}>
        {isObject(children) ? children : <a href={href}>{children}</a>}
      </BlockElement>
    );
  }
}
