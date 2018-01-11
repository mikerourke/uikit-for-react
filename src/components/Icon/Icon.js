import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  UIK,
} from '../../lib';

class Icon extends React.Component {
  static meta = {
    name: 'Icon',
    ukClass: 'uk-icon',
  };

  static propTypes = {
    as: PropTypes.oneOf(['a', 'span']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    link: PropTypes.bool,
    margin: commonPropTypes.margin,
    name: PropTypes.oneOf(UIK.ICON_NAMES),
    padding: commonPropTypes.padding,
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
