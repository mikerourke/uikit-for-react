import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class CountdownSeparator extends React.Component {
  static displayName = 'CountdownSeparator';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div', 'span'),
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-countdown-separator');
    const Element = getElementType(CountdownSeparator, this.props);
    return <Element {...rest} className={classes} />;
  }
}
