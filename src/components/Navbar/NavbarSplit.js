import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

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
    this.ref = null;
  }

  componentDidMount() {
    const firstNav = this.ref.querySelector('.uk-nav, [uk-nav]');
    if (firstNav) {
      firstNav.classList.add('uk-navbar-nav');
    }

    const dropdowns = this.ref.querySelectorAll('.uk-dropdown, [uk-dropdown]');
    if (dropdowns.length !== 0) {
      dropdowns.forEach(dropdownElement => {
        dropdownElement.classList.add('uk-navbar-dropdown');
        const nav = dropdownElement.querySelector('.uk-nav');
        if (nav) nav.classList.add('uk-navbar-dropdown-nav');
      });
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const { className, side, ...rest } = this.props;

    const classes = classnames(
      className,
      buildClassName('navbar-center', side),
    );

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} className={classes} component={NavbarSplit} />
      </Ref>
    );
  }
}
