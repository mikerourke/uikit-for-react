import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, restrictToChildTypes } from '../../lib';
import { BlockElement } from '../Base';
import SubnavItem from './SubnavItem';

export default class Subnav extends React.Component {
  static displayName = 'Subnav';

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes(SubnavItem),
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

  static Item = SubnavItem;

  render() {
    const { className, divider, pill, ...rest } = this.props;

    const classes = classnames(className, 'uk-subnav', {
      [buildClassName('subnav', 'divider')]: divider,
      [buildClassName('subnav', 'pill')]: pill,
    });

    return <BlockElement {...rest} as="ul" className={classes || undefined} />;
  }
}
