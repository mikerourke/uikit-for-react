import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { keys, omit } from 'lodash';
import { textPropTypes, getTextClassNames } from '../props/forText';
import { getElementType, HTML } from '../../lib';

class Text extends React.Component {
  static meta = {
    name: 'Text',
    ukClass: 'uk-text',
  };

  static propTypes = {
    ...textPropTypes,

    /** HTML element to use for the component. */
    as: PropTypes.oneOf(HTML.TEXT_ELEMENTS),

    /** Contents to display in the element. */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string,
    ]).isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'span',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      ...rest
    } = this.props;

    const validProps = omit(rest, keys(textPropTypes));

    const classes = classnames(
      className,
      Text.meta.ukClass,
      getTextClassNames(this.props),
    );

    const Element = getElementType(Text, as);
    return (
      <Element
        {...validProps}
        className={classes}
      >
        {children}
      </Element>
    );
  }
}

export default Text;
