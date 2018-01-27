import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../../base/index';

export default class FormLegend extends React.Component {
  static displayName = 'FormLegend';

  static propTypes = {
    ...InlineElement.propTypes,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    children: null,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-legend');
    return (
      <InlineElement {...rest} as="legend" className={classes || undefined} />
    );
  }
}
