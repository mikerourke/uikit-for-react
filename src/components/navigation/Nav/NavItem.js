// TODO: Come back to this, it requires some fanagling to get SubNav to work correctly.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';

export default class NavItem extends React.Component {
  static displayName = 'NavItem';

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    divider: PropTypes.bool,
    header: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    active: false,
    className: null,
    divider: false,
    header: false,
  };

  render() {
    const { active, children, className, disabled, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName('disabled')]: disabled,
    });

    return (
      <BlockElement {...rest} as="li" className={classes || undefined}>
        {this.renderChildren(children)}
      </BlockElement>
    );
  }
}
