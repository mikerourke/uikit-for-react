import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { childrenHaveClass, customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

export default class Container extends React.Component {
  static displayName = 'Container';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    expand: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { children, className, expand, large, small, ...rest } = this.props;

    const classes = classnames(className, 'uk-container', {
      'uk-container-expand': expand,
      'uk-container-large': large,
      'uk-container-small': small,
      'uk-inline': childrenHaveClass(children, 'position'),
    });

    return (
      <Base {...rest} className={classes} component={Container}>
        {children}
      </Base>
    );
  }
}
