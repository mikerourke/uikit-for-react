import React from 'react';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../lib';
import Base from '../Base';

export default class CardTitle extends React.Component {
  static displayName = 'CardTitle';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.HEADING_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'h3',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-card-title');

    return <Base {...rest} className={classes} component={CardTitle} />;
  }
}
