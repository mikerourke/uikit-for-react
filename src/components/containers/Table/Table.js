import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';

export default class Table extends React.Component {
  static displayName = 'Table';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(['table']),
      PropTypes.element,
      PropTypes.func,
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    divider: PropTypes.bool,
    hover: PropTypes.bool,
    justify: PropTypes.bool,
    middle: PropTypes.bool,
    small: PropTypes.bool,
    stackable: PropTypes.bool,
    striped: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
    divider: false,
    hover: false,
    justify: false,
    middle: false,
    small: false,
    stackable: false,
    striped: false,
  };

  static Body = TableBody;
  static Cell = TableCell;
  static Footer = TableFooter;
  static Header = TableHeader;
  static HeaderCell = TableHeaderCell;
  static Row = TableRow;

  render() {
    const {
      className,
      divider,
      hover,
      justify,
      middle,
      small,
      stackable,
      striped,
      ...rest
    } = this.props;

    const ukClass = 'uk-table';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'divider')]: divider,
      [buildClassName(ukClass, 'hover')]: hover,
      [buildClassName(ukClass, 'justify')]: justify,
      [buildClassName(ukClass, 'middle')]: middle,
      [buildClassName(ukClass, 'responsive')]: stackable,
      [buildClassName(ukClass, 'small')]: small,
      [buildClassName(ukClass, 'striped')]: striped,
    });

    return <BlockElement {...rest} as="table" className={classes} />;
  }
}
