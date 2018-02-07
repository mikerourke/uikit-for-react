import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  HTML,
} from '../../../lib';

export default class VisibilityToggle extends React.Component {
  static displayName = 'VisibilityToggle';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
    whenHovered: PropTypes.oneOf(['hidden', 'invisible']).isRequired,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, whenHovered, ...rest } = this.props;
    const classes = classnames(className, buildClassName(whenHovered, 'hover'));
    const Element = getElementType(VisibilityToggle, as);
    return <Element {...rest} className={classes} />;
  }
}
