import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';
import { Dropdown } from '../../elements';
import NavbarItem from './NavbarItem';

export default class NavbarDropdown extends React.Component {
  static displayName = 'NavbarDropdown';

  static propTypes = {
    ...omit(Dropdown.propTypes, 'as'),
    children: CustomPropTypes.elementType(NavbarItem),
    className: PropTypes.string,
    multiplyWidth: PropTypes.oneOf([2, 3, 4, 5]),
    navOptions: PropTypes.shape(BlockElement.propTypes),
  };

  static defaultProps = {
    ...Dropdown.defaultProps,
    className: '',
    multiplyWidth: null,
    navOptions: null,
  };

  render() {
    const {
      children,
      className,
      multiplyWidth,
      navOptions,
      ...rest
    } = this.props;

    const ukClass = 'uk-navbar-dropdown';
    const classes = classnames(
      className,
      ukClass,
      buildClassName(ukClass, 'width', multiplyWidth),
    );

    const navProps = {
      ...navOptions,
      className: classnames(
        navOptions.className,
        'uk-nav',
        buildClassName(ukClass, 'nav'),
      ),
    };
    return (
      <Dropdown {...rest} as="div" className={classes}>
        <BlockElement {...navProps} as="ul">
          {children}
        </BlockElement>
      </Dropdown>
    );
  }
}
