import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';
import { Align, Flex, Margin, Width } from '../../common';
import PaginationNext from './PaginationNext';
import classnames from 'classnames';

export default class PaginationPrevious extends React.Component {
  static displayName = 'PaginationPrevious';

  static propTypes = {
    align: Align.propTypes,
    as: customPropTypes.customOrStringElement('span'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'span',
    className: '',
  };

  render() {
    const { align, as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      Align.getClasses(align),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(PaginationNext, as);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-pagination-previous=""
      />
    );
  }
}
