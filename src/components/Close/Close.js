import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName, buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
} from '../../lib';

class Close extends React.Component {
  static meta = {
    name: 'Close',
    ukClass: 'uk-close',
  };

  static propTypes = {
    alert: PropTypes.bool,

    /** HTML element to use for the component. */
    as: PropTypes.oneOf(['a', 'button']),

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    large: PropTypes.bool,

    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,

    modal: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    as: 'a',
    className: '',
  };

  render() {
    const {
      alert,
      as,
      className,
      large,
      margin,
      modal,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Close.meta.ukClass,
      buildClassName('alert', 'close', alert),
      buildClassName('close', 'large', large),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildClassName('modal', 'close', 'default', modal),
    );

    const Element = getElementType(Close, as, rest);
    return (
      <Element
        {...rest}
        className={classes}
        data-uk-close
      />
    );
  }
}

export default Close;
