import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML,
  UIK,
} from '../../lib';

class Toggle extends React.Component {
  static meta = {
    name: 'Toggle',
    ukClass: 'uk-toggle',
  };

  static propTypes = {
    animation: commonPropTypes.animation,
    as: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.oneOf(['a', 'button']),
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    mode: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.MODES, 'media']),
      PropTypes.arrayOf(UIK.MODES),
    ]),
    padding: commonPropTypes.padding,
    target: PropTypes.string,
    classToggled: PropTypes.string,
  };

  static defaultProps = {
    as: 'button',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Toggle.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    const Element = getElementType(Toggle, as, rest);
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

export default Toggle;
