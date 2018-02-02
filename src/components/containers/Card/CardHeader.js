import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class CardHeader extends React.Component {
  static displayName = 'CardHeader';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringChild('div'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-card-header');
    return <BlockElement {...rest} className={classes} />;
  }
}
