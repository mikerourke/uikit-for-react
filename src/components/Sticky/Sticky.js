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
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    clsActive: PropTypes.string,
    clsInactive: PropTypes.string,
    margin: commonPropTypes.margin,
    media: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    offset: PropTypes.number,
    onActive: PropTypes.func,
    onInactive: PropTypes.func,
    padding: commonPropTypes.padding,
    showOnUp: PropTypes.bool,
    target: PropTypes.bool,
    top: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
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
