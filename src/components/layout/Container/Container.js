import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  childrenHaveClass,
  customPropTypes,
  getElementType,
  HTML,
} from '../../../lib';

export default class Container extends React.Component {
  static displayName = 'Container';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['expand', 'large', 'small']),
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, children, className, size, ...rest } = this.props;

    const ukClass = 'uk-container';
    const classes = classnames(
      className,
      ukClass,
      buildClassName(ukClass, size),
      {
        [buildClassName('inline')]: childrenHaveClass(children, 'position'),
      },
    );

    const Element = getElementType(Container, as);
    return (
      <Element {...rest} className={classes}>
        {children}
      </Element>
    );
  }
}
