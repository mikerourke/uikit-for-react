import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';
import Base from '../../base';

export default class UploadFileSelect extends React.Component {
  static displayName = 'UploadFileSelect';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { as, children, ...rest } = this.props;
    const Element = getElementType(UploadFileSelect, as);
    return (
      <Element {...rest} data-uk-form-custom="">
        <input type="file" />
        {children}
      </Element>
    );
  }
}
