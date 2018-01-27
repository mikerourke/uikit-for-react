import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib';
import { BlockElement } from '../../base';
import DotNavItem from './DotNavItem';

class DotNav extends React.Component {
  static displayName = 'DotNav';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    vertical: false,
  };

  static Item = DotNavItem;

  render() {
    const { className, vertical, ...rest } = this.props;

    const ukClass = 'uk-dotnav';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'vertical')]: vertical,
    });

    return <BlockElement {...rest} as="ul" className={classes || undefined} />;
  }
}

export default DotNav;
