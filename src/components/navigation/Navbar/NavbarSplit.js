import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';
import NavbarNav from './NavbarNav';

export default class NavbarSplit extends React.Component {
  static displayName = 'NavbarSplit';

  static propTypes = {
    ...BlockElement.propTypes,
    children: CustomPropTypes.elementType(NavbarNav),
    className: PropTypes.string,
    side: PropTypes.oneOf(['left', 'right']).isRequired,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    const { className, side, ...rest } = this.props;
    const classes = classnames(
      className,
      buildClassName('navbar', 'center', side),
    );
    return <BlockElement {...rest} as="div" className={classes} />;
  }
}
