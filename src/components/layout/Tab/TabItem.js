import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isObject } from 'lodash';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';

export default class TabItem extends React.Component {
  static displayName = 'TabItem';

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    active: false,
    className: null,
    disabled: false,
    href: '#',
  };

  render() {
    const { active, children, className, disabled, href, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName('active')]: active,
      [buildClassName('disabled')]: disabled,
    });

    return (
      <BlockElement {...rest} as="li" className={classes}>
        {isObject(children) ? children : <a href={href}>{children}</a>}
      </BlockElement>
    );
  }
}
