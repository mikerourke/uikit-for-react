import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import ListItem from './ListItem';

export default class List extends React.Component {
  static displayName = 'List';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    bullet: PropTypes.bool,
    children: customPropTypes.restrictToChildTypes(ListItem),
    className: PropTypes.string,
    divider: PropTypes.bool,
    large: PropTypes.bool,
    striped: PropTypes.bool,
  };

  static defaultProps = {
    as: 'ul',
    bullet: false,
    className: '',
    divider: false,
    large: false,
    striped: false,
  };

  static Item = ListItem;

  render() {
    const {
      as,
      bullet,
      className,
      divider,
      large,
      striped,
      ...rest
    } = this.props;

    const ukClass = 'uk-list';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'bullet')]: bullet,
      [buildClassName(ukClass, 'divider')]: divider,
      [buildClassName(ukClass, 'large')]: large,
      [buildClassName(ukClass, 'striped')]: striped,
    });

    const Element = getElementType(List, this.props);
    return <Element {...rest} className={classes} />;
  }
}
