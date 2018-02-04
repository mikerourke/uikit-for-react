import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  customPropTypes,
  getElementType,
  UIK,
} from '../../../lib';
import { Link } from '../../elements';

export default class TableCell extends React.Component {
  static displayName = 'TableCell';

  static propTypes = {
    as: customPropTypes.customOrStringElement('td'),
    children: PropTypes.node,
    className: PropTypes.string,
    expand: PropTypes.bool,
    link: PropTypes.bool,
    middle: PropTypes.bool,
    shrink: PropTypes.bool,
    textWrapping: PropTypes.oneOf(['nowrap', 'truncate']),
    width: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ALL_WIDTHS),
      PropTypes.shape({
        default: PropTypes.oneOf(UIK.ALL_WIDTHS),
        atSm: PropTypes.oneOf(UIK.ALL_WIDTHS),
        atMd: PropTypes.oneOf(UIK.ALL_WIDTHS),
        atLg: PropTypes.oneOf(UIK.ALL_WIDTHS),
        atXl: PropTypes.oneOf(UIK.ALL_WIDTHS),
      }),
    ]),
  };

  static defaultProps = {
    as: 'th',
    className: '',
    expand: false,
    link: false,
    middle: false,
    shrink: false,
  };

  resetChildLinks = children =>
    React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child;
      const childType = child.type;
      if (childType === 'a' || childType === Link || child.props.href) {
        return React.cloneElement(child, {
          className: classnames(child.props.className, 'uk-link-reset'),
          children: this.resetChildLinks(child.props.children),
        });
      }
      return child;
    });

  renderChildren = children => this.resetChildLinks(children);

  render() {
    const {
      as,
      children,
      className,
      expand,
      link,
      middle,
      shrink,
      textWrapping,
      width,
      ...rest
    } = this.props;

    const ukClass = 'uk-table';
    const classes = classnames(
      className,
      buildClassName('text', textWrapping),
      buildClassName('width', width),
      buildClassName('width', get(width, 'default')),
      buildClassName('width', get(width, 'atSm'), '@s'),
      buildClassName('width', get(width, 'atMd'), '@m'),
      buildClassName('width', get(width, 'atLg'), '@l'),
      buildClassName('width', get(width, 'atXl'), '@xl'),
      {
        [buildClassName(ukClass, 'expand')]: expand,
        [buildClassName(ukClass, 'link')]: link,
        [buildClassName(ukClass, 'middle')]: middle,
        [buildClassName(ukClass, 'shrink')]: shrink,
      },
    );

    const Element = getElementType(TableCell, this.props);
    return (
      <Element {...rest} className={classes}>
        {this.renderChildren(children)}
      </Element>
    );
  }
}
