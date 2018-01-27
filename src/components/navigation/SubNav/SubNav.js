import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, restrictToChildTypes } from '../../../lib';
import { BlockElement } from '../../base';
import SubNavItem from './SubNavItem';

export default class SubNav extends React.Component {
  static displayName = 'SubNav';

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes(SubNavItem),
    className: PropTypes.string,
    divider: PropTypes.bool,
    pill: PropTypes.bool,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    divider: false,
    pill: false,
  };

  static Item = SubNavItem;

  render() {
    const { className, divider, pill, ...rest } = this.props;

    const classes = classnames(className, 'uk-subnav', {
      [buildClassName('subnav', 'divider')]: divider,
      [buildClassName('subnav', 'pill')]: pill,
    });

    return <BlockElement {...rest} as="ul" className={classes || undefined} />;
  }
}
