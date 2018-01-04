import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { without } from 'lodash';
import {
  getElementType,
  UIK,
} from '../../lib';

class Grid extends React.Component {
  static meta = {
    name: 'Grid',
    ukClass: 'uk-grid',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.string,

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    divider: PropTypes.bool,

    gutter: PropTypes.oneOf([...without(UIK.SIZES, 'xlarge'), 'collapse']),

    matchChild: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Grid.meta.ukClass,
    );

    const Element = getElementType(Grid, as);
    return (
      <Element
        {...rest}
        className={classes}
      >
        {children}
      </Element>
    );
  }
}

export default Grid;
