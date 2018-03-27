import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class ModalHeader extends React.Component {
  static displayName = 'ModalHeader';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-modal-header');
    return <Base {...rest} className={classes} component={ModalHeader} />;
  }
}
