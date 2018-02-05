import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  hasChildType,
} from '../../../lib';
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
    as: 'div',
    className: '',
    padContent: false,
  };

  render() {
    const { as, className, padContent, ...rest } = this.props;

    const classes = classnames(className, 'uk-modal-dialog', {
      [buildClassName('modal', 'body')]: padContent,
    });

    const Element = getElementType(ModalDialog, this.props);
    return <Element {...rest} className={classes} />;
  }
}
