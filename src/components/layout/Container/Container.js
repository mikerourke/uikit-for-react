import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  childrenHaveClass,
  customPropTypes,
  HTML,
} from '../../../lib';
import Base from '../../base';

export default class Container extends React.Component {
  static displayName = 'Container';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['expand', 'large', 'small']),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { children, className, size, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-container',
      buildClassName('container', size),
      {
        'uk-inline': childrenHaveClass(children, 'position'),
      },
    );

    return (
      <Base {...rest} className={classes} component={Container}>
        {children}
      </Base>
    );
  }
}
