import React from 'react';
import PropTypes from 'prop-types';
import { InlineElement } from '../../base/index';

export default class FormSelectOption extends React.Component {
  static displayName = 'FormSelectOption';

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
    return <InlineElement {...this.props} as="option" />;
  }
}
