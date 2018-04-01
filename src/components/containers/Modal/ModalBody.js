import React from 'react';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

export default class ModalBody extends React.Component {
  static displayName = 'ModalBody';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-modal-body');

    return <Base {...rest} className={classes} component={ModalBody} />;
  }
}
