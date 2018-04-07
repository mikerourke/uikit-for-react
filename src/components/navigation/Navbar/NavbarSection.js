import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  customPropTypes,
  LibraryComponent,
  UIK,
} from '../../../lib';
import Base from '../../base';

export default class NavbarSection extends React.Component {
  static displayName = 'NavbarSection';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    location: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  componentDidMount() {
    const firstNav = LibraryComponent.findFirstWithName('nav');
    if (firstNav) {
      firstNav.classList.add('uk-navbar-nav');
    }

    const dropdowns = LibraryComponent.findAllWithName('dropdown');
    if (dropdowns.length !== 0) {
      dropdowns.forEach(dropdownElement => {
        dropdownElement.classList.add('uk-navbar-dropdown');
      });
    }
  }

  render() {
    const { className, location, ...rest } = this.props;

    const classes = classnames(className, buildClassName('navbar', location));

    return <Base {...rest} className={classes} component={NavbarSection} />;
  }
}
