import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil, without } from 'lodash';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';
import {
  buildAttributeOptions,
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
  UIK,
} from '../../lib';

export default class AccordionItem extends React.Component {
  static meta = {
    name: 'AccordionItem',
  };

  static propTypes = {
    background: commonPropTypes.background,
    border: PropTypes.oneOf(['circle', 'rounded']),
    boxShadow: commonPropTypes.boxShadow,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    clearfix: PropTypes.bool,
    content: PropTypes.node,
    display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    dynamic: PropTypes.bool,
    firstColumn: PropTypes.string,
    float: PropTypes.oneOf(['left', 'right']),
    height: PropTypes.oneOf(['full', ...without(UIK.SIZES, 'xlarge')]),
    heightMatch: commonPropTypes.heightMatch,
    hidden: commonPropTypes.hidden,
    inline: PropTypes.bool,
    inverse: PropTypes.oneOf(['dark', 'light']),
    invisible: PropTypes.oneOf([true, false, 'hover']),
    margin: commonPropTypes.margin,
    maxHeight: PropTypes.oneOf(without(UIK.SIZES, 'xlarge')),
    nextRow: commonPropTypes.nextRow,
    open: PropTypes.bool,
    overflow: PropTypes.oneOf(['auto', 'hidden']),
    padding: commonPropTypes.padding,
    position: commonPropTypes.position,
    resize: PropTypes.oneOf([true, 'vertical']),
    responsive: PropTypes.oneOf([false, 'height', 'width']),
    title: PropTypes.node,
    viewport: commonPropTypes.viewport,
    visible: commonPropTypes.visible,
    width: commonPropTypes.width,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      background,
      border,
      boxShadow,
      children,
      className,
      clearfix,
      content,
      display,
      float,
      height,
      hidden,
      inline,
      inverse,
      invisible,
      margin,
      maxHeight,
      open,
      overflow,
      padding,
      position,
      resize,
      responsive,
      title,
      visible,
      width,
      ...rest
    } = this.props;

    if (!isNil(children) && (!isNil(content) || !isNil(title))) {
      throw new Error('You cannot specify children with content and title in Accordion.');
    }
    if (isNil(children) && (isNil(content) || isNil(title))) {
      throw new Error('You must specify a title and content, ensure you specified both for Accordion.');
    }

    const classes = classnames(
      className,
      AccordionItem.meta.ukClass,
      buildObjectOrValueClassNames('background', background),
      buildClassName('border', border),
      buildObjectOrValueClassNames('boxShadow', boxShadow),
      buildClassName('display', display),
      buildClassName('float', float),
      buildClassName((height === 'full') ? ['height', '1', '1'] : ['height', height]),
      buildClassName('height', 'max', maxHeight),
      buildObjectOrValueClassNames('hidden', hidden),
      buildClassName(inverse),
      buildClassName('inline', inline),
      buildClassName('invisible', invisible),
      buildObjectOrValueClassNames('margin', margin),
      buildClassName('overflow', overflow),
      buildObjectOrValueClassNames('padding', padding),
      buildObjectOrValueClassNames('position', position),
      buildClassName('responsive', responsive),
      buildObjectOrValueClassNames('visible', visible),
      buildObjectOrValueClassNames('width', width),
      {
        [buildClassName('clearfix')]: (clearfix),
        [buildClassName('open')]: (open),
        [buildClassName('preserve', 'width')]: (responsive === false),
        [buildClassName('resize')]: (resize),
      },
    );

    const { dataAttributes, validProps } = buildAttributeOptions(rest);
    return (
      <li
        {...validProps}
        className={classes || undefined}
        {...dataAttributes}
      >
        {(title) && <AccordionTitle>{title}</AccordionTitle>}
        {(content) && <AccordionContent>{content}</AccordionContent>}
        {(children) && children}
      </li>
    );
  }
}
