import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, hasChildType } from '../../../lib';
import Base from '../../base';
import ModalBody from './ModalBody';

export default class ModalDialog extends React.Component {
  static displayName = 'ModalDialog';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    body: PropTypes.bool,
    children: ExtraPropTypes.and([
      PropTypes.node,
      props => {
        if (props.body && hasChildType(props.children, ModalBody)) {
          return new Error(
            'You cannot set body to true if you have a ModalBody ' +
              'child in ModalDialog.',
          );
        }
        return null;
      },
    ]),
  };

  static defaultProps = {
    as: 'div',
    body: false,
  };

  render() {
    const { body, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-modal-dialog', {
      'uk-modal-body': body,
    });
    return <Base {...rest} className={classes} component={ModalDialog} />;
  }
}
