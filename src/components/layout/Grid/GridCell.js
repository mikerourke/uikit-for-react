import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import { customPropTypes } from '../../../lib';
import { flexProps } from '../../common';
import Base from '../../base';

export default class GridCell extends React.Component {
  static displayName = 'GridCell';

  static propTypes = {
    ...omit(Base.propTypes, 'flex'),
    ...flexProps.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    matchHeight: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const {
      alignItems,
      className,
      direction,
      displayAs,
      grow,
      inline,
      justifyContent,
      matchHeight,
      order,
      wrap,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      flexProps.extrapolateClasses({
        alignItems,
        direction,
        displayAs,
        grow,
        inline,
        justifyContent,
        order,
        wrap,
      }),
      {
        'uk-grid-item-match': matchHeight,
      },
    );

    return (
      <Base {...rest} className={classes || undefined} component={GridCell} />
    );
  }
}
