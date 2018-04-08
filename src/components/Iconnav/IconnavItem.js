import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import { customPropTypes, UIK } from '../../lib';
import Base from '../Base';
import Icon from '../Icon';

export default class IconnavItem extends React.Component {
  static displayName = 'IconnavItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    href: PropTypes.string,
    iconName: PropTypes.oneOf(UIK.ICON_NAMES).isRequired,
    iconOptions: PropTypes.shape(omit(Icon.propTypes, 'name')),
  };

  static defaultProps = {
    ...Base.defaultProps,
    active: false,
    as: 'li',
  };

  render() {
    const {
      active,
      className,
      href,
      iconName,
      iconOptions,
      ...rest
    } = this.props;

    const classes = classnames(className, { 'uk-active': active });

    return (
      <Base {...rest} className={classes} component={IconnavItem}>
        <Icon as="a" {...iconOptions} href={href} name={iconName} />
      </Base>
    );
  }
}
