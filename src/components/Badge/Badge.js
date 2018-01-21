import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

export default class Badge extends InlineElement {
  static meta = {
    name: 'Badge',
    ukClass: 'uk-badge',
  };

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(['a', 'span']),
  };

  static defaultProps = {
    as: 'span',
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <InlineElement
        {...rest}
        className={classnames(className, Badge.meta.ukClass)}
      />
    );
  }
}
