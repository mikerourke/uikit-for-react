import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import { buildClassName, customPropTypes, UIK } from '../../../lib';
import Base from '../../base';
import { Icon } from '../../elements';

export default class IconNavItem extends React.Component {
  static displayName = 'IconNavItem';

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
    href: '#',
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

    const classes = classnames(className, {
      [buildClassName('active')]: active,
    });

    return (
      <Base {...rest} className={classes} component={IconNavItem}>
        <Icon {...iconOptions} href={href} name={iconName} />
      </Base>
    );
  }
}
