import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import ListItem from './ListItem';

export default class List extends React.Component {
  static displayName = 'List';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    bullet: PropTypes.bool,
    children: customPropTypes.restrictToChildTypes(ListItem),
    divider: PropTypes.bool,
    large: PropTypes.bool,
    striped: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
    bullet: false,
    divider: false,
    large: false,
    striped: false,
  };

  static Item = ListItem;

  render() {
    const { bullet, className, divider, large, striped, ...rest } = this.props;

    const classes = classnames(className, 'uk-list', {
      'uk-list-bullet': bullet,
      'uk-list-divider': divider,
      'uk-list-large': large,
      'uk-list-striped': striped,
    });

    return <Base {...rest} className={classes} component={List} />;
  }
}
