import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';
import { buildClassName, restrictToChildTypes } from '../../../lib/index';
import { BlockElement } from '../../base/index';

/**
 * Component with the required Content and Title elements.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionItem extends React.Component {
  static displayName = 'AccordionItem';

  static propTypes = {
    ...BlockElement.propTypes,
    children: restrictToChildTypes([AccordionContent, AccordionTitle]),
    className: PropTypes.string,
    content: CustomPropTypes.mutuallyExclusiveProps(
      CustomPropTypes.elementType(AccordionContent),
      'children',
      'content',
    ),
    open: PropTypes.bool,
    title: PropTypes.node,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
    content: null,
    open: false,
    title: null,
  };

  render() {
    const { children, className, content, open, title, ...rest } = this.props;

    if (!isNil(children) && (!isNil(content) || !isNil(title))) {
      throw new Error(
        'You cannot specify children with content and title in Accordion.',
      );
    }
    if (isNil(children) && (isNil(content) || isNil(title))) {
      throw new Error(
        'You must specify a title and content, ensure you specified both for Accordion.',
      );
    }

    const classes = classnames(className, { [buildClassName('open')]: open });
    return (
      <BlockElement {...rest} as="li" className={classes || undefined}>
        {title && <AccordionTitle>{title}</AccordionTitle>}
        {content && <AccordionContent>{content}</AccordionContent>}
        {children && children}
      </BlockElement>
    );
  }
}
