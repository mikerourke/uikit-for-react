import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class UploadFileSelect extends React.Component {
  static displayName = 'UploadFileSelect';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, children, ...rest } = this.props;
    const Element = getElementType(UploadFileSelect, this.props);
    return (
      <Element {...rest} data-uk-form-custom="">
        <input type="file" />
        {children}
      </Element>
    );
  }
}
