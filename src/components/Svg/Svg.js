import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { customPropTypes } from '../../lib/index';
import Base from '../Base/index';

export default class Svg extends React.Component {
  static displayName = 'Svg';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('img'),
    children: ExtraPropTypes.restrictedProp(),
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'img',
  };

  render() {
    return <Base {...this.props} component={Svg} uk-svg="" />;
  }
}
