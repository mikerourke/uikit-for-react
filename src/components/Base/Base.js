import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { without } from 'lodash';
import {
  buildClassName,
  buildMarginAttributeOptions,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML,
  UIK,
} from '../../lib';

class Base extends React.Component {
  static propTypes = {
    as: PropTypes.oneOf(HTML.ALL_ELEMENTS),
    background: commonPropTypes.background,
    children: PropTypes.node,
    className: PropTypes.string,
    inline: PropTypes.bool,
    inverse: PropTypes.oneOf(['dark', 'light']),
    dynamic: PropTypes.bool,
    firstColumn: PropTypes.string,
    height: PropTypes.oneOf(['full', ...without(UIK.SIZES, 'xlarge')]),
    margin: commonPropTypes.margin,
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    padding: commonPropTypes.padding,
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.BASE_WIDTHS),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.BASE_WIDTHS)),
    ]),
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      background,
      children,
      className,
      dynamic,
      firstColumn,
      height,
      inline,
      inverse,
      margin,
      nextRow,
      padding,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildObjectOrValueClassNames('background', background),
      buildClassName((height === 'full') ? ['height', '1', '1'] : ['height', height]),
      buildClassName(inverse),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('width', width),
      {
        [buildClassName('inline')]: (inline),
      },
    );

    const Element = getElementType(Base, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        {...buildMarginAttributeOptions(dynamic, firstColumn, nextRow)}
      >
        {children}
      </Element>
    );
  }
}

export default Base;
