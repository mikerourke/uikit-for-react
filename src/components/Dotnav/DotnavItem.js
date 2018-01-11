import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
} from '../../lib';

class DotnavItem extends React.Component {
  static meta = {
    name: 'DotnavItem',
  };

  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
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
        <a href={href}>{children}</a>
      </li>
    );
  }
}

export default DotnavItem;
