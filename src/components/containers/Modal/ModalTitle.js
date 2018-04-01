import React from 'react';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

export default class ModalTitle extends React.Component {
  static displayName = 'ModalTitle';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'h2',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-modal-title');

    return <Base {...rest} className={classes} component={ModalTitle} />;
  }
}
