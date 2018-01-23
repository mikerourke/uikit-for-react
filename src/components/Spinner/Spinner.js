import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../Base';

export default class Spinner extends BlockElement {
  static displayName = 'Spinner';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: null,
  };

  render() {
    return <BlockElement {...this.props} data-uk-spinner />;
  }
}
