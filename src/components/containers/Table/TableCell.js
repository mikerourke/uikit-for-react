import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes } from '../../../lib';
import Base from '../../base';
import { Link } from '../../elements';

export default class TableCell extends React.Component {
  static displayName = 'TableCell';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('td'),
    children: PropTypes.node,
    expand: PropTypes.bool,
    link: PropTypes.bool,
    middle: PropTypes.bool,
    shrink: PropTypes.bool,
    textWrapping: PropTypes.oneOf(['nowrap', 'truncate']),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'th',
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
      children,
      className,
      expand,
      link,
      middle,
      shrink,
      textWrapping,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      buildClassName('text', textWrapping),
      {
        'uk-table-expand': expand,
        'uk-table-link': link,
        'uk-table-middle': middle,
        'uk-table-shrink': shrink,
      },
    );

    return (
      <Base {...rest} className={classes || undefined} component={TableCell}>
        {this.renderChildren(children)}
      </Base>
    );
  }
}
