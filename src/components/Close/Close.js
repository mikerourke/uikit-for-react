import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
} from '../../lib';
import Root from '../Root';

class Close extends Root {
  static meta = {
    name: 'Close',
    ukClass: 'uk-close',
  };

  static propTypes = {
    alert: PropTypes.bool,

    /** HTML element to use for the component. */
    as: PropTypes.oneOf(['a', 'button']),

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    large: PropTypes.bool,

    modal: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      alert,
      as,
      className,
      large,
      modal,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Close.meta.ukClass,
      buildClassName('alert', 'close', alert),
      buildClassName('close', 'large', large),
      buildClassName('modal', 'close', 'default', modal),
      this.getRootClassNames(),
    );

    const Element = getElementType(Close, as);
    return (
      <Element
        {...this.getValidProps(rest)}
        className={classes}
      />
    );
  }
}

export default Close;
