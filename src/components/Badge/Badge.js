import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

export default class Badge extends InlineElement {
  static displayName = 'Badge';

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(['a', 'span']),
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'span',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-badge');
    return <InlineElement {...rest} className={classes || undefined} />;
  }
}
