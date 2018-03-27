import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class ModalTitle extends React.Component {
  static displayName = 'ModalTitle';

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
    const classes = classnames(className, 'uk-modal-title');
    return <Base {...rest} className={classes} component={ModalTitle} />;
  }
}
