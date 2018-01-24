import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class Form extends React.Component {
  static displayName = 'Form';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    horizontal: PropTypes.bool,
    stacked: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    horizontal: false,
    stacked: false,
  };

  render() {
    const { className, horizontal, stacked, ...rest } = this.props;

    const ukClass = 'uk-form';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'horizontal')]: horizontal,
      [buildClassName(ukClass, 'stacked')]: stacked,
    });

    return (
      <BlockElement {...rest} as="form" className={classes || undefined} />
    );
  }
}
