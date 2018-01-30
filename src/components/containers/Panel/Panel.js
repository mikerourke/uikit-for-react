import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';

export default class Panel extends React.Component {
  static displayName = 'Panel';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    scrollable: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
    scrollable: false,
  };

  render() {
    const { className, scrollable, ...rest } = this.props;

    const ukClass = 'uk-panel';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'scrollable')]: scrollable,
    });

    return <BlockElement {...rest} as="div" className={classes} />;
  }
}
