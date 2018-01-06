import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  buildStyles,
  commonPropTypes,
  getElementType,
  getOptionsString,
  HTML,
  UIK,
} from '../../lib';

class Container extends React.Component {
  static meta = {
    name: 'Container',
    ukClass: 'uk-container',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
    background: commonPropTypes.background,

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    childMargins: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        firstColumn: PropTypes.string,
        nextRow: PropTypes.shape({
          location: PropTypes.oneOf(UIK.LOCATIONS),
          modifier: PropTypes.oneOf(UIK.SPACING_MODIFIERS),
        }),
      }),
    ]),

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,

    /** Size of the container. */
    size: PropTypes.oneOf(['expand', 'large', 'small']),
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      background,
      children,
      childMargins,
      className,
      margin,
      padding,
      size,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Container.meta.ukClass,
      buildObjectOrValueClassNames('background', background),
      buildClassName('container', size),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );
    const styles = buildStyles(this.props);

    const childMarginOptions = getOptionsString({
      margin: buildClassName(
        'margin',
        get(childMargins, ['nextRow', 'modifier'], 'small'),
        get(childMargins, ['nextRow', 'location'], 'top'),
      ),
      firstColumn: buildClassName(get(childMargins, 'firstColumn', 'uk-first-column')),
    });

    const Element = getElementType(Container, as, rest);
    return (
      <Element
        {...rest}
        className={classes}
        style={styles}
        data-uk-margin={(childMargins) ? childMarginOptions : undefined}
      >
        {children}
      </Element>
    );
  }
}

export default Container;
