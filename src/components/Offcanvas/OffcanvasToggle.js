import React from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';
import { getAttrSelector } from '../../lib';
import Toggle from '../Toggle';

export default class OffcanvasToggle extends React.Component {
  static displayName = 'OffcanvasToggle';
  static propTypes = {
    ...Toggle.propTypes,
    target: PropTypes.string.isRequired,
  };

  static defaultProps = Toggle.defaultProps;

  render() {
    const { target, ...rest } = this.props;

    if (isNil(target)) throw new Error('You must specify a target.');

    const selector = getAttrSelector('offcanvas', target);

    return <Toggle {...rest} component={OffcanvasToggle} target={selector} />;
  }
}
