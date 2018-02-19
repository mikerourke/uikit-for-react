import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Text, Utility, Width } from '../../common';
import { Link } from '../../elements';

export default class TableCell extends React.Component {
  static displayName = 'TableCell';

  static propTypes = {
    as: customPropTypes.customOrStringElement('td'),
    children: PropTypes.node,
    className: PropTypes.string,
    expand: PropTypes.bool,
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    link: PropTypes.bool,
    margin: Margin.propTypes,
    middle: PropTypes.bool,
    shrink: PropTypes.bool,
    textWrapping: PropTypes.oneOf(['nowrap', 'truncate']),
    text: Text.propTypes,
    utility: Utility.propTypes,
    width: Width.propTypes,
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
      flex,
      link,
      inverse,
      margin,
      middle,
      shrink,
      textWrapping,
      text,
      utility,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName('text', textWrapping),
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Text.getClasses(text),
      Utility.getClasses(utility),
      Width.getClasses(width),
      {
        'uk-table-expand': expand,
        'uk-table-link': link,
        'uk-table-middle': middle,
        'uk-table-shrink': shrink,
      },
    );

    const Element = getElementType(TableCell, as);
    return (
      <Element {...rest} className={classes || undefined}>
        {this.renderChildren(children)}
      </Element>
    );
  }
}
