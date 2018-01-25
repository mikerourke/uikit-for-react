import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { EveryElement } from '../Base';

export default class CountdownSeparator extends React.Component {
  static displayName = 'CountdownSeparator';

  static propTypes = {
    ...EveryElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['div', 'span']),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...EveryElement.defaultProps,
    as: 'div',
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-countdown-separator');
    return <EveryElement {...rest} className={classes || undefined} />;
  }
}
