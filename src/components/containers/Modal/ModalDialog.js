import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType, hasChildType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Width } from '../../common';
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
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    padContent: PropTypes.bool,
    text: Text.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    padContent: false,
  };

  render() {
    const {
      as,
      className,
      flex,
      inverse,
      margin,
      padContent,
      text,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-modal-dialog',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Width.getClasses(width),
      {
        'uk-modal-body': padContent,
      },
    );

    const Element = getElementType(ModalDialog, as);
    return <Element {...rest} className={classes} />;
  }
}
