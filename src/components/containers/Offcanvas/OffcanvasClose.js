import React from 'react';
import classnames from 'classnames';
import { Close } from '../../elements';

export default class OffcanvasClose extends React.Component {
  static displayName = 'OffcanvasClose';
  static propTypes = Close.propTypes;
  static defaultProps = Close.defaultProps;

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-offcanvas-close');

    return <Close {...rest} className={classes} component={OffcanvasClose} />;
  }
}
