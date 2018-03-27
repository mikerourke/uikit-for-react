import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class Gif extends React.Component {
  static displayName = 'Gif';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('img'),
    children: ExtraPropTypes.explicitNull(),
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
