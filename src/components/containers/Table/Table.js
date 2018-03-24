import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';

export default class Table extends React.Component {
  static displayName = 'Table';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('table'),
    children: PropTypes.node,
    divider: PropTypes.bool,
    hover: PropTypes.bool,
    justify: PropTypes.bool,
    middle: PropTypes.bool,
    small: PropTypes.bool,
    stackable: PropTypes.bool,
    striped: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'table',
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

    const classes = classnames(className, 'uk-table', {
      'uk-table-divider': divider,
      'uk-table-hover': hover,
      'uk-table-justify': justify,
      'uk-table-middle': middle,
      'uk-table-responsive': stackable,
      'uk-table-small': small,
      'uk-table-striped': striped,
    });

    return <Base {...rest} className={classes} component={Table} />;
  }
}
