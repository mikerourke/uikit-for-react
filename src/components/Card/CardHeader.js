import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class CardHeader extends React.Component {
  static displayName = 'CardHeader';

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

    const classes = classnames(className, 'uk-card-header');

    return <Base {...rest} className={classes} component={CardHeader} />;
  }
}
