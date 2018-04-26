import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, HTML, UIK } from '../../lib';
import Base from '../Base';

export default class Hidden extends React.Component {
  static displayName = 'Hidden';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.ALL_ELEMENTS),
    breakpoint: PropTypes.oneOf(UIK.BREAKPOINTS),
    children: PropTypes.node.isRequired,
    hide: PropTypes.bool,
    howerOut: PropTypes.oneOf(['hidden', 'invisible']),
    noTouchOnly: PropTypes.bool,
    touchOnly: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    hide: false,
    noTouchOnly: false,
    touchOnly: false,
  };

  render() {
    const {
      breakpoint,
      className,
      hide,
      howerOut,
      noTouchOnly,
      touchOnly,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName(howerOut, 'hover'),
      buildClassName('hidden', breakpoint),
      {
        'uk-hidden': hide,
        'uk-hidden-notouch': noTouchOnly,
        'uk-hidden-touch': touchOnly,
      },
    );

    return (
      <Base
        {...rest}
        className={classes}
        component={Hidden}
        hidden={hide || undefined}
      />
    );
  }
}
