import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  HTML,
} from '../../lib';

class Label extends React.Component {
  static meta = {
    name: 'Label',
    ukClass: 'uk-label',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    danger: PropTypes.bool,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      children,
      className,
      danger,
      margin,
      padding,
      success,
      warning,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Label.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName(Label.meta.ukClass, 'danger')]: (danger),
        [buildClassName(Label.meta.ukClass, 'success')]: (success),
        [buildClassName(Label.meta.ukClass, 'warning')]: (warning),
      },
    );

    return (
      <span
        {...rest}
        className={classes}
      >
        {children}
      </span>
    );
  }
}

export default Label;
