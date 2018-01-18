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
    as: PropTypes.oneOf(['div', 'span']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hidden: commonPropTypes.hidden,
    invisible: PropTypes.oneOf([true, false, 'hover']),
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
    textAlign: PropTypes.oneOfType([
      PropTypes.oneOf([...UIK.HORIZONTAL_POSITIONS, 'justify']),
      commonPropTypes.getForBreakpoints(PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS)),
    ]),
    visible: commonPropTypes.visible,
  };

  static defaultProps = {
    as: 'div',
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

    const Element = getElementType(CountdownLabel, this.props);
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
