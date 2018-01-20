import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';
import DotnavItem from './DotnavItem';

class Dotnav extends BlockElement {
  static meta = {
    name: 'Dotnav',
    ukClass: 'uk-dotnav',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    vertical: false,
  };

  static Item = DotnavItem;

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      children,
      className,
      vertical,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      inheritedClasses,
      Dotnav.meta.ukClass,
      {
        [buildClassName(Dotnav.meta.ukClass, 'vertical')]: (vertical),
      },
    );

    return (
      <ul
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </ul>
    );
  }
}

export default Dotnav;
