import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML,
} from '../../lib';

class Link extends React.Component {
  static meta = {
    name: 'Link',
    ukClass: 'uk-link',
  };

  static propTypes = {
    as: PropTypes.oneOf(HTML.ALL_ELEMENTS),
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    muted: PropTypes.bool,
    padding: commonPropTypes.padding,
    reset: PropTypes.bool,
    text: PropTypes.bool,
  };

  static defaultProps = {
    as: 'a',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      margin,
      muted,
      padding,
      reset,
      text,
      ...rest
    } = this.props;

    if (as !== 'a' && isNil(text)) {
      throw new Error(
        'You must specify a "text" prop if you are not using an "a" for the "as" prop.',
      );
    }

    const classes = classnames(
      className,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName(Link.meta.ukClass, 'muted')]: (muted),
        [buildClassName(Link.meta.ukClass, 'reset')]: (reset),
        [buildClassName(Link.meta.ukClass, 'text')]: (text),
      },
    );

    const Element = getElementType(Link, as, this.props);
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

export default Link;
