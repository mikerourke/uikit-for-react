import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  getElementType,
  HTML,
} from '../../lib';
import Root from '../Root';

class Container extends Root {
  static meta = {
    name: 'Container',
    ukClass: 'uk-container',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Size of the container. */
    size: PropTypes.oneOf(['expand', 'large', 'small']),
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
      size,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Container.meta.ukClass,
      buildClassName('container', size),
      this.getRootClassNames(),
    );

    const Element = getElementType(Container, as);
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

export default Container;
