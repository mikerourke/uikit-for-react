import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class OverlayImage extends React.Component {
  static displayName = 'OverlayImage';

  static propTypes = {
    as: customPropTypes.customOrStringElement('img'),
    children: ExtraPropTypes.explicitNull(),
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    as: 'img',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(OverlayImage, this.props);
    return <Element {...rest} />;
  }
}
