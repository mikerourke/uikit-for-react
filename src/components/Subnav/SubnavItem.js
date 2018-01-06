import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isObject } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
} from '../../lib';

class SubnavItem extends React.Component {
  static meta = {
    name: 'SubnavItem',
    ukClass: 'uk-subnav-item',
  };

  static propTypes = {
    active: PropTypes.bool,

    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    href: PropTypes.string,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      active,
      children,
      className,
      href,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      SubnavItem.meta.ukClass,
      buildClassName('active', active),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    return (
      <li
        {...rest}
        className={classes}
      >
        {(isObject(children)) ? children : <a href={href}>{children}</a>}
      </li>
    );
  }
}

export default SubnavItem;
