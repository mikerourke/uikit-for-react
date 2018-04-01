import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class CountdownLabel extends React.Component {
  static displayName = 'CountdownLabel';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div', 'span'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-countdown-label');

    return <Base {...rest} className={classes} component={CountdownLabel} />;
  }
}
