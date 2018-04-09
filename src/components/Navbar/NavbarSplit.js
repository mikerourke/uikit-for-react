import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, LibraryComponent } from '../../lib';
import Base from '../Base';

export default class NavbarSplit extends React.Component {
  static displayName = 'NavbarSplit';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    side: PropTypes.oneOf(['left', 'right']).isRequired,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('navbar-split');
  }

  componentDidMount() {
    const firstNav = this.libComp.findFirstChildWithName('nav');
    if (firstNav) {
      firstNav.classList.add('uk-navbar-nav');
    }

    const dropdowns = this.libComp.findAllChildrenWithName('dropdown');
    if (dropdowns.length !== 0) {
      dropdowns.forEach(dropdownElement => {
        dropdownElement.classList.add('uk-navbar-dropdown');
      });
    }
  }

  render() {
    const { className, side, ...rest } = this.props;

    const classes = classnames(
      className,
      buildClassName('navbar-center', side),
    );

    return (
      <Base
        {...rest}
        className={classes}
        component={NavbarSplit}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
