import React from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';
import { customPropTypes } from '../../lib';
import Toggle from '../Toggle';

export default class ModalToggle extends React.Component {
  static displayName = 'ModalToggle';

  static propTypes = {
    ...Toggle.propTypes,
    as: customPropTypes.customOrStringElement('a', 'button'),
    forModal: PropTypes.string,
    target: PropTypes.string,
  };

  static defaultProps = {
    ...Toggle.defaultProps,
    as: 'a',
  };

  render() {
    const { forModal, target, ...rest } = this.props;

    return (
      <Toggle
        {...rest}
        component={ModalToggle}
        target={isNil(target) ? `[modal-name="${forModal}"]` : target}
      />
    );
  }
}
