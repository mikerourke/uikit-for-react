import React from 'react';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../lib';
import Base from '../Base';

export default class SwitcherContent extends React.Component {
  static displayName = 'SwitcherContent';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-switcher');

    return <Base {...rest} className={classes} component={SwitcherContent} />;
  }
}
