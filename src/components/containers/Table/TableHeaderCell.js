import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';

export default class TableHeaderCell extends React.Component {
  static displayName = 'TableHeaderCell';

  static propTypes = {
    as: customPropTypes.customOrStringElement('th'),
    children: PropTypes.node,
    className: PropTypes.string,
    expand: PropTypes.bool,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    link: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['reset'])]),
    margin: Margin.propTypes,
    shrink: PropTypes.bool,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'th',
    className: '',
    expand: false,
    link: false,
    shrink: false,
  };

  render() {
    const {
      as,
      className,
      expand,
      flex,
      link,
      inverse,
      margin,
      shrink,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-table-expand': expand,
        'uk-table-link': link === true,
        'uk-link-reset': link === 'reset',
        'uk-table-shrink': shrink,
      },
    );

    const Element = getElementType(TableHeaderCell, as);
    return <Element {...rest} className={classes || undefined} />;
  }
}
