import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../../base';

export default class FormLabel extends React.Component {
  static displayName = 'FormLabel';

  static propTypes = {
    ...InlineElement.propTypes,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    children: null,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-form-label');
    return (
      <InlineElement {...rest} as="label" className={classes} />
    );
  }
}
