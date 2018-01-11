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
  };

  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    href: PropTypes.string,
    margin: commonPropTypes.margin,
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
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName('active')]: (active),
      },
    );

    return (
      <li
        {...rest}
        className={classes || undefined}
      >
        {(isObject(children)) ? children : <a href={href}>{children}</a>}
      </li>
    );
  }
}

export default SubnavItem;
