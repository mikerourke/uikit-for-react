import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class GridCell extends React.Component {
  static displayName = 'GridCell';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    matchHeight: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    matchHeight: false,
  };

  render() {
    const {
      as,
      className,
      flex,
      margin,
      matchHeight,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        [buildClassName('grid', 'item', 'match')]: matchHeight,
      },
    );

    const Element = getElementType(GridCell, this.props);
    return <Element {...rest} className={classes || undefined} />;
  }
}
