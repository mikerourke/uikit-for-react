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
    border: PropTypes.oneOf(['circle', 'rounded']),
    boxShadow: commonPropTypes.boxShadow,
    children: PropTypes.node,
    className: PropTypes.string,
    clearfix: PropTypes.bool,
    display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    dynamic: PropTypes.bool,
    firstColumn: PropTypes.string,
    float: PropTypes.oneOf(['left', 'right']),
    height: PropTypes.oneOf(['full', ...without(UIK.SIZES, 'xlarge')]),
    hidden: commonPropTypes.hidden,
    inline: PropTypes.bool,
    inverse: PropTypes.oneOf(['dark', 'light']),
    invisible: PropTypes.oneOf([true, false, 'hover']),
    margin: commonPropTypes.margin,
    maxHeight: PropTypes.oneOf(without(UIK.SIZES, 'xlarge')),
    nextRow: PropTypes.shape({
      spacing: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
      location: PropTypes.oneOf(UIK.LOCATIONS),
    }),
    overflow: PropTypes.oneOf(['auto', 'hidden']),
    padding: commonPropTypes.padding,
    position: commonPropTypes.position,
    resize: PropTypes.oneOf([true, 'vertical']),
    responsive: PropTypes.oneOf([false, 'height', 'width']),
    visible: commonPropTypes.visible,
    width: commonPropTypes.width,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      background,
      border,
      boxShadow,
      children,
      className,
      clearfix,
      display,
      dynamic,
      firstColumn,
      float,
      height,
      hidden,
      inline,
      inverse,
      invisible,
      margin,
      maxHeight,
      nextRow,
      overflow,
      padding,
      position,
      resize,
      responsive,
      visible,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildObjectOrValueClassNames('background', background),
      buildClassName('border', border),
      buildObjectOrValueClassNames('boxShadow', boxShadow),
      buildClassName('display', display),
      buildClassName((height === 'full') ? ['height', '1', '1'] : ['height', height]),
      buildObjectOrValueClassNames('hidden', hidden),
      buildClassName(inverse),
      buildClassName('invisible', invisible),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('position', position),
      buildObjectOrValueClassNames('visible', visible),
      buildObjectOrValueClassNames('width', width),
      {
        [buildClassName('clearfix')]: (clearfix),
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
