import React from 'react';
import classnames from 'classnames';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

export default class VisibilityTogglable extends React.Component {
  static displayName = 'VisibilityTogglable';

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
    const classes = classnames(className, 'uk-visible-toggle');
    return (
      <Base {...rest} className={classes} component={VisibilityTogglable} />
    );
  }
}
