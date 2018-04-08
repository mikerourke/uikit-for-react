import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class Badge extends React.Component {
  static displayName = 'Badge';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a', 'span'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'span',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-badge');

    return <Base {...rest} className={classes} component={Badge} />;
  }
}
