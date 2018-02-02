import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { BlockElement } from '../../base';

export default class OverlayContext extends React.Component {
  static displayName = 'OverlayContext';

  static propTypes = {
    ...omit(BlockElement.propTypes, 'inline'),
    as: BlockElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-inline');
    return <BlockElement {...rest} className={classes} />;
  }
}
