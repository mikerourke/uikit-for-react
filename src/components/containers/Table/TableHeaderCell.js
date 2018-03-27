import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../../lib';
import Base from '../../base';

export default class TableHeaderCell extends React.Component {
  static displayName = 'TableHeaderCell';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('th'),
    expand: PropTypes.bool,
    link: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['reset'])]),
    shrink: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'th',
    expand: false,
    link: false,
    shrink: false,
  };

  render() {
    const { className, expand, link, shrink, ...rest } = this.props;

    const classes = classnames(className, {
      'uk-table-expand': expand,
      'uk-table-link': link === true,
      'uk-link-reset': link === 'reset',
      'uk-table-shrink': shrink,
    });

    return (
      <Base
        {...rest}
        className={classes || undefined}
        component={TableHeaderCell}
      />
    );
  }
}
