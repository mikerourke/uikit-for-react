import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import classnames from 'classnames';
import {
  buildBreakpointClasses,
  customPropTypes,
  HTML,
  UIK,
} from '../../../lib';
import Base from '../../base';

export default class Column extends React.Component {
  static displayName = 'Column';

  static propTypes = {
    ...omit(Base.propTypes, ['column', 'columnSpan']),
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    divider: PropTypes.bool,
    width: customPropTypes.forBreakpoints(UIK.BASE_WIDTHS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    divider: false,
  };

  render() {
    const { className, divider, width, ...rest } = this.props;

    const classes = classnames(className, buildBreakpointClasses(width), {
      'uk-column-divider': divider,
    });

    return <Base {...rest} component={Column} className={classes} />;
  }
}
