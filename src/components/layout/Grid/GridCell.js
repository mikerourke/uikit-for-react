import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';

export default class GridCell extends React.Component {
  static displayName = 'GridCell';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    matchHeight: PropTypes.bool,
    text: Text.propTypes,
    utility: Utility.propTypes,
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
      inverse,
      margin,
      matchHeight,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
      {
        'uk-grid-item-match': matchHeight,
      },
    );

    const Element = getElementType(GridCell, as);
    return <Element {...rest} className={classes || undefined} />;
  }
}
