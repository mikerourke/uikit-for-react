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
    children: ExtraPropTypes.and([
      PropTypes.node,
      props => {
        if (props.padContent && hasChildType(props.children, ModalBody)) {
          return new Error(
            'You cannot set padContent to true if you have a ModalBody ' +
              'child in ModalDialog.',
          );
        }
        return null;
      },
    ]),
    padContent: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    padContent: false,
  };

  render() {
    const { className, padContent, ...rest } = this.props;
    const classes = classnames(className, 'uk-modal-dialog', {
      'uk-modal-body': padContent,
    });
    return <Base {...rest} className={classes} component={ModalDialog} />;
  }
}
