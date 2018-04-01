import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class Progress extends React.Component {
  static displayName = 'Progress';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('progress'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'progress',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-progress');

    return <Base {...rest} className={classes} component={Progress} />;
  }
}
