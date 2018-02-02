import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName, hasChildType } from '../../../lib';
import { BlockElement } from '../../base';
import ModalBody from './ModalBody';

export default class ModalDialog extends React.Component {
  static displayName = 'ModalDialog';

  static propTypes = {
    ...BlockElement.propTypes,
    children: ExtraPropTypes.and([
      PropTypes.node,
      props => {
        if (props.padContent && hasChildType(props.children, ModalBody)) {
          return new Error(
            'You cannot set padContent to true if you have a ModalBody child in ModalDialog.',
          );
        }
        return null;
      },
    ]),
    className: PropTypes.string,
    padContent: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
    padContent: false,
  };

  render() {
    const { className, padContent, ...rest } = this.props;
    const classes = classnames(className, 'uk-modal-dialog', {
      [buildClassName('modal', 'body')]: padContent,
    });
    return <BlockElement {...rest} as="div" className={classes} />;
  }
}
