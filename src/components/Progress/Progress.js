import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

export default class Progress extends InlineElement {
  static displayName = 'Progress';

  static propTypes = {
    ...InlineElement.propTypes,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-progress');
    return (
      <InlineElement {...rest} as="progress" className={classes || undefined} />
    );
  }
}
