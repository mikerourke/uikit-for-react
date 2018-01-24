import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class DotnavItem extends React.Component {
  static displayName = 'DotnavItem';

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
    children: null,
    className: null,
    href: null,
  };

  render() {
    const { active, children, className, href, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName('active')]: active,
    });

    return (
      <BlockElement {...rest} as="li" className={classes || undefined}>
        <a href={href}>{children}</a>
      </BlockElement>
    );
  }
}
