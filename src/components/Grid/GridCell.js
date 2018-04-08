import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import { customPropTypes } from '../../lib';
import { flexProps } from '../common';
import Base from '../Base';

export default class GridCell extends React.Component {
  static displayName = 'GridCell';

  static propTypes = {
    ...omit(Base.propTypes, 'flex'),
    ...omit(flexProps.propTypes, 'display'),
    as: customPropTypes.customOrStringElement('div'),
    flex: PropTypes.bool,
    matchHeight: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    flex: false,
  };

  render() {
    const {
      alignItems,
      className,
      direction,
      flex,
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
        display: flex,
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
