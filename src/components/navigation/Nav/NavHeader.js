import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class NavHeader extends React.Component {
  static displayName = 'NavHeader';

  static propTypes = {
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'li',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-nav-header');
    const Element = getElementType(NavHeader, as);
    return <Element {...rest} className={classes} />;
  }
}
