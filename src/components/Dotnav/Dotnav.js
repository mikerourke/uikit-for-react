import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { Block } from '../Base';
import DotnavItem from './DotnavItem';

class Dotnav extends Block {
  static meta = {
    name: 'Dotnav',
    ukClass: 'uk-dotnav',
  };

  static propTypes = {
    ...Block.propTypes,
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
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      children,
      className,
      vertical,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
      Dotnav.meta.ukClass,
      {
        [buildClassName(Dotnav.meta.ukClass, 'vertical')]: (vertical),
      },
    );

    return (
      <ul
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        {...attributes}
      >
        {children}
      </ul>
    );
  }
}

export default Dotnav;
