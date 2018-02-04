import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import { BlockElement } from '../../base';

export default class CardFooter extends React.Component {
  static displayName = 'CardFooter';

  static propTypes = {
    ...BlockElement.propTypes,
    as: customPropTypes.customOrStringElement('div'),
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
    const classes = classnames(className, 'uk-card-footer');
    return <BlockElement {...rest} className={classes} />;
  }
}
