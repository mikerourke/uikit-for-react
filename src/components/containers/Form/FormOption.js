import React from 'react';
import PropTypes from 'prop-types';
import { InlineElement } from '../../base';

export default class FormOption extends React.Component {
  static displayName = 'FormOption';

  static propTypes = {
    ...InlineElement.propTypes,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    children: null,
    className: '',
  };

  render() {
    return <InlineElement {...this.props} as="option" />;
  }
}
