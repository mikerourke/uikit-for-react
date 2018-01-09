import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  UIK,
} from '../../lib';

class CountdownLabel extends React.Component {
  static meta = {
    name: 'CountdownLabel',
    ukClass: 'uk-countdown-label',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(['div', 'span']),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Hide the element or hide at specific breakpoints. */
    hidden: commonPropTypes.hidden,

    /** Hide the element without removing it from the document flow. */
    invisible: PropTypes.oneOf([true, false, 'hover']),

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /** Align text horizontally to a specific location or specify breakpoints. */
    textAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS)),
    ]),

    /** Breakpoint at which to show the element (or toggle on hover). */
    visible: commonPropTypes.visible,
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
      hidden,
      invisible,
      margin,
      padding,
      textAlign,
      visible,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      CountdownLabel.meta.ukClass,
      buildObjectOrValueClassNames('hidden', hidden),
      buildClassName('invisible', invisible),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('text', textAlign),
      buildObjectOrValueClassNames('visible', visible),
    );

    const Element = getElementType(CountdownLabel, as, rest);
    return (
      <Element
        {...rest}
        className={classes}
      >
        {children}
      </Element>
    );
  }
}

export default CountdownLabel;
