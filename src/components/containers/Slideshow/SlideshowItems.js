import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class SlideshowItems extends React.Component {
  static displayName = 'SlideshowItems';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-slideshow-items');
    return <Base {...rest} className={classes} component={SlideshowItems} />;
  }
}
