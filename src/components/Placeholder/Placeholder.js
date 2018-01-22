import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class Placeholder extends BlockElement {
  static displayName = 'Placeholder';

  static propTypes = {
    ...BlockElement.propTypes,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-placeholder');
    return <BlockElement {...rest} as="div" className={classes || undefined} />;
  }
}
