import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { InlineElement } from '../Base';

export default class Close extends InlineElement {
  static meta = {
    name: 'Close',
    ukClass: 'uk-close',
  };

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(['a', 'button']),
    className: PropTypes.string,
    large: PropTypes.bool,
  };

  static defaultProps = {
    as: 'a',
    large: false,
  };

  render() {
    const { className, large, ...rest } = this.props;

    const classes = classnames(className, Close.meta.ukClass, {
      [buildClassName(Close.meta.ukClass, 'large')]: large,
    });

    return (
      <InlineElement {...rest} className={classes || undefined} data-uk-close />
    );
  }
}
