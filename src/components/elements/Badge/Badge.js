import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getElementType } from '../../../lib';

export default class Badge extends React.Component {
  static displayName = 'Badge';

  static propTypes = {
    as: PropTypes.oneOf(['a', 'span']),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'span',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-badge');
    const Element = getElementType(Badge, as);
    return <Element {...rest} className={classes} />;
  }
}
