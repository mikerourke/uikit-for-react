import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../../base';

export default class CardFooter extends React.Component {
  static displayName = 'CardFooter';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-card-footer');
    return <BlockElement {...rest} as="div" className={classes} />;
  }
}
