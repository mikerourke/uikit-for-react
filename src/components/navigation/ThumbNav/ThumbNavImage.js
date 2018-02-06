import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class ThumbNavImage extends React.Component {
  static displayName = 'ThumbNavImage';

  static propTypes = {
    as: customPropTypes.customOrStringElement('img'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'img',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(ThumbNavImage, as);
    return <Element {...rest} />;
  }
}
