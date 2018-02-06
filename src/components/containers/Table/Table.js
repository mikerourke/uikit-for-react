import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';

export default class Table extends React.Component {
  static displayName = 'Table';

  static propTypes = {
    as: customPropTypes.customOrStringElement('table'),
    children: PropTypes.node,
    className: PropTypes.string,
    divider: PropTypes.bool,
    flex: Flex.propTypes,
    hover: PropTypes.bool,
    justify: PropTypes.bool,
    margin: Margin.propTypes,
    middle: PropTypes.bool,
    small: PropTypes.bool,
    stackable: PropTypes.bool,
    striped: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'table',
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
      as,
      className,
      divider,
      flex,
      hover,
      justify,
      margin,
      middle,
      small,
      stackable,
      striped,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-table',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-table-divider': divider,
        'uk-table-hover': hover,
        'uk-table-justify': justify,
        'uk-table-middle': middle,
        'uk-table-responsive': stackable,
        'uk-table-small': small,
        'uk-table-striped': striped,
      },
    );

    const Element = getElementType(Table, as);
    return <Element {...rest} className={classes} />;
  }
}
