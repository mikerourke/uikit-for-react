import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class Svg extends React.Component {
  static displayName = 'Svg';

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
    const Element = getElementType(Svg, this.props);
    return <Element {...rest} data-uk-svg="" />;
  }
}
