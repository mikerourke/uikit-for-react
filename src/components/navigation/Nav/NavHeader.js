import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class NavHeader extends React.Component {
  static displayName = 'NavHeader';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringChild('li'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'li',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-nav-header');
    return <BlockElement {...rest} className={classes} />;
  }
}
