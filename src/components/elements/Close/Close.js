import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { InlineElement } from '../../base';

export default class Close extends React.Component {
  static displayName = 'Close';

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(['a', 'button']),
    className: PropTypes.string,
    large: PropTypes.bool,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'a',
    className: null,
    large: false,
  };

  render() {
    const { className, large, ...rest } = this.props;

    const ukClass = 'uk-close';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'large')]: large,
    });

    return (
      <InlineElement {...rest} className={classes || undefined} data-uk-close />
    );
  }
}
