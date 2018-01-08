import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName, buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
} from '../../lib';

class Close extends React.Component {
  static meta = {
    name: 'Close',
    ukClass: 'uk-close',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(['a', 'button']),

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Create a larger Close button */
    large: PropTypes.bool,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Action to perform when the close button is clicked. */
    onClick: PropTypes.func,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    as: 'a',
    className: '',
  };

  render() {
    const {
      as,
      className,
      large,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Close.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName(Close.meta.ukClass, 'large')]: (large),
      },
    );

    const Element = getElementType(Close, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-close
      />
    );
  }
}

export default Close;
