import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
} from '../../lib';

class Icon extends React.Component {
  static meta = {
    name: 'Icon',
    ukClass: 'uk-icon',
  };

  static propTypes = {
    /** HTML element to use for the component. */
    as: PropTypes.oneOf(['a', 'span']),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Reset the default link styling to a more muted color when using an icon inside an anchor. */
    link: PropTypes.bool,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Name of the UIkit icon. */
    name: PropTypes.string,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /** Multiply the icon size by the specified value. */
    ratio: PropTypes.number,
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
      link,
      margin,
      name,
      padding,
      ratio,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Icon.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName(Icon.meta.ukClass, 'link')]: (link),
      },
    );

    const attributeOptions = getOptionsString({
      icon: name,
      ratio,
    });

    const Element = getElementType(Icon, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        data-uk-icon={attributeOptions}
      >
        {children}
      </Element>
    );
  }
}

export default Icon;
