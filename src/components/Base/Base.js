import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getElementType, HTML } from '../../lib';
import Root from '../Root';

class Base extends Root {
  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML.ALL_ELEMENTS),

    /** Additional classes to apply to element. */
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      this.getRootClassNames(),
    );

    const Element = getElementType(Base, as);
    return (
      <Element
        {...this.getValidProps(rest)}
        className={classes}
      >
        {children}
      </Element>
    );
  }
}

export default Base;
