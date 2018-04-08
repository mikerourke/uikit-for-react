import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class Gif extends React.Component {
  static displayName = 'Gif';

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
    return <Base {...this.props} component={Gif} uk-gif="" />;
  }
}
