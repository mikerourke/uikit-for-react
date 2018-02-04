import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes } from '../../../lib';
import { BaseElement } from '../../base';

export default class TableHeaderCell extends React.Component {
  static displayName = 'TableHeaderCell';

  static propTypes = {
    ...BaseElement.propTypes,
    as: customPropTypes.customOrStringElement('th'),
    children: PropTypes.node,
    className: PropTypes.string,
    expand: PropTypes.bool,
    link: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['reset'])]),
    shrink: PropTypes.bool,
  };

  static defaultProps = {
    ...BaseElement.defaultProps,
    as: 'th',
    className: '',
    expand: false,
    link: false,
    shrink: false,
  };

  render() {
    const { className, expand, link, shrink, ...rest } = this.props;
    const ukClass = 'uk-table';
    const classes = classnames(className, {
      [buildClassName(ukClass, 'expand')]: expand,
      [buildClassName(ukClass, 'link')]: link === true,
      [buildClassName('link', 'reset')]: link === 'reset',
      [buildClassName(ukClass, 'shrink')]: shrink,
    });
    return <BaseElement {...rest} className={classes} />;
  }
}
