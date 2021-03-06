import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, renderNavigationChild } from '../../lib';
import Base from '../Base';

export default class DotnavItem extends React.Component {
  static displayName = 'DotnavItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    href: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    active: false,
    as: 'li',
  };

  render() {
    const { active, children, className, href, ...rest } = this.props;

    const classes = classnames(className, { 'uk-active': active });

    return (
      <Base {...rest} className={classes || undefined} component={DotnavItem}>
        {renderNavigationChild(children, { href })}
      </Base>
    );
  }
}
