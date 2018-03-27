import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class GridCell extends React.Component {
  static displayName = 'GridCell';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    matchHeight: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    matchHeight: false,
  };

  render() {
    const { className, matchHeight, ...rest } = this.props;

    const classes = classnames(className, {
      'uk-grid-item-match': matchHeight,
    });

    return (
      <Base {...rest} className={classes || undefined} component={GridCell} />
    );
  }
}
