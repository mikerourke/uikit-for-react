import React from 'react';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../lib';
import Base from '../Base';

export default class CardBadge extends React.Component {
  static displayName = 'CardBadge';

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

    const classes = classnames(className, 'uk-card-badge');

    return <Base {...rest} className={classes} component={CardBadge} />;
  }
}
