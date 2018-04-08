import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, HTML } from '../../lib';
import Base from '../Base';

export default class VisibilityToggle extends React.Component {
  static displayName = 'VisibilityToggle';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    whenHovered: PropTypes.oneOf(['hidden', 'invisible']).isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { className, whenHovered, ...rest } = this.props;

    const classes = classnames(className, buildClassName(whenHovered, 'hover'));

    return <Base {...rest} className={classes} component={VisibilityToggle} />;
  }
}
