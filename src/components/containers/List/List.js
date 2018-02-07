import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';
import ListItem from './ListItem';

export default class List extends React.Component {
  static displayName = 'List';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    bullet: PropTypes.bool,
    children: customPropTypes.restrictToChildTypes(ListItem),
    className: PropTypes.string,
    divider: PropTypes.bool,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    large: PropTypes.bool,
    margin: Margin.propTypes,
    striped: PropTypes.bool,
    width: Width.propTypes,
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
      flex,
      large,
      inverse,
      margin,
      striped,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-list',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-list-bullet': bullet,
        'uk-list-divider': divider,
        'uk-list-large': large,
        'uk-list-striped': striped,
      },
    );

    const Element = getElementType(List, as);
    return <Element {...rest} className={classes} />;
  }
}
