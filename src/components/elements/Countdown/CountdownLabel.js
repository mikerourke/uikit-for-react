import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';

export default class CountdownLabel extends React.Component {
  static displayName = 'CountdownLabel';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div', 'span'),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
        as: 'div',
    className: '',
  };

  render() {
    const { as, className, ...rest } = this.props;
    const classes = classnames(className, 'uk-countdown-label');
    const Element = getElementType(CountdownLabel, this.props);
    return <Element {...rest} className={classes} />;
  }
}
