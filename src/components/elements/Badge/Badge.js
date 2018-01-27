import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../../base';

export default class Badge extends React.Component {
  static displayName = 'Badge';

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(['a', 'span']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'span',
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-badge');
    return <InlineElement {...rest} className={classes || undefined} />;
  }
}
