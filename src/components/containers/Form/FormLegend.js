import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class FormLegend extends React.Component {
  static displayName = 'FormLegend';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('legend'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'legend',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-legend');
    return <Base {...rest} className={classes} component={FormLegend} />;
  }
}
