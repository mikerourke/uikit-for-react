import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../Base';

export default class UploadFileSelect extends React.Component {
  static displayName = 'UploadFileSelect';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <BlockElement {...rest} as="div" data-uk-form-custom>
        <input type="file" />
        {children}
      </BlockElement>
    );
  }
}
