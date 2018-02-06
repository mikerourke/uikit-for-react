import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';

export default class Close extends React.Component {
  static displayName = 'Close';

  static propTypes = {
    as: customPropTypes.customOrStringElement('a', 'button'),
    className: PropTypes.string,
    large: PropTypes.bool,
  };

  static defaultProps = {
    as: 'a',
    className: '',
    large: false,
  };

  render() {
    const { as, className, large, ...rest } = this.props;

    const ukClass = 'uk-close';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'large')]: large,
    });

    const Element = getElementType(Close, this.props);
    return <Element {...rest} className={classes} data-uk-close="" />;
  }
}
