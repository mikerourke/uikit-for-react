import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../../base/index';

export default class FormFieldset extends React.Component {
  static displayName = 'FormFieldset';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-fieldset');
    return (
      <BlockElement {...rest} as="fieldset" className={classes || undefined} />
    );
  }
}
