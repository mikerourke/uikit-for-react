import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  HTML,
} from '../../lib';

class AccordionContent extends React.Component {
  static meta = {
    name: 'AccordionContent',
    ukClass: 'uk-accordion-content',
  };

  static propTypes = {
    as: PropTypes.oneOf(HTML.ALL_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
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
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      AccordionContent.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    const Element = getElementType(AccordionContent, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
      >
        {children}
      </Element>
    );
  }
}

export default AccordionContent;
