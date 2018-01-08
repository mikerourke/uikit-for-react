import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  HTML,
} from '../../lib';

class Sticky extends React.Component {
  static meta = {
    name: 'Sticky',
  };

  static propTypes = {
    /** The animation to use when the element becomes sticky. */
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),

    /** Element type to display for the component. */
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),

    /**
     * The bottom offset until the element should stick. (true: parent element, prefixed with '!'
     *    a parent selector)
     */
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Contents to display in the component. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** The active class. */
    clsActive: PropTypes.string,

    /** The inactive class. */
    clsInactive: PropTypes.string,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /**
     * Condition for the active status - a width as integer (e.g. 640) or a breakpoint
     *    (e.g. @s, @m, @l, @xl).
     */
    media: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** The offset the Sticky should be fixed to. */
    offset: PropTypes.number,

    /** Fires after the element becomes sticky. */
    onActive: PropTypes.func,

    /** Fires after the element is no longer sticky. */
    onInactive: PropTypes.func,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /** Only show sticky element when scrolling up. */
    showOnUp: PropTypes.bool,

    /** Initially make sure that the Sticky is not over a targeted element via location hash. */
    target: PropTypes.bool,

    /**
     * The top offset from where the element should be stick.
     */
    top: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** The element the Sticky should get its width from in active mode. */
    widthElement: PropTypes.string,
  };

  static defaultProps = {
    animation: false,
    as: 'div',
    bottom: false,
    className: '',
    clsActive: 'uk-active',
    clsInactive: '',
    media: false,
    offset: 0,
    showOnUp: false,
    target: false,
    top: 0,
    widthElement: false,
  };

  componentDidMount() {
    UIkit.on(this.ref, 'active', this.props.onActive);
    UIkit.on(this.ref, 'inactive', this.props.onInactive);
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      animation,
      as,
      bottom,
      children,
      className,
      clsActive,
      clsInactive,
      margin,
      padding,
      media,
      offset,
      showOnUp,
      target,
      top,
      widthElement,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    const componentOptions = getOptionsString({
      animation,
      bottom,
      clsActive,
      clsInactive,
      media,
      offset,
      showOnUp,
      target,
      top,
      widthElement,
    });

    const Element = getElementType(Sticky, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        data-uk-sticky={componentOptions}
      >
        {children}
      </Element>
    );
  }
}

export default Sticky;
