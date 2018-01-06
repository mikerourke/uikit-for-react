import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { flatten, get, noop, range } from 'lodash';
import UIkit from 'uikit';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  HTML,
} from '../../lib';
import AccordionContent from './AccordionContent';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';

class Accordion extends React.Component {
  static meta = {
    name: 'Accordion',
    ukClass: 'uk-accordion',
  };

  static propTypes = {
    activeIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]),

    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        transition: PropTypes.oneOf(HTML.CSS_EASING),
        duration: PropTypes.number,
      }),
    ]),

    /** HTML element to use for the component. */
    as: PropTypes.oneOf(['ul', 'ol']),

    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Allow all items to be closed. */
    collapsible: PropTypes.bool,

    defaultIndex: PropTypes.number,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Allow multiple open items. */
    multiple: PropTypes.bool,

    onBeforeShow: PropTypes.func,

    onShow: PropTypes.func,

    onShown: PropTypes.func,

    onBeforeHide: PropTypes.func,

    onHide: PropTypes.func,

    onHidden: PropTypes.func,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    selectors: PropTypes.shape({
      forContent: PropTypes.string,
      forTargets: PropTypes.string,
      forToggle: PropTypes.string,
    }),
  };

  static defaultProps = {
    activeIndex: null,
    animation: {
      transition: 'ease',
      duration: 200,
    },
    as: 'ul',
    className: '',
    collapsible: true,
    defaultIndex: null,
    multiple: false,
  };

  static Content = AccordionContent;
  static Item = AccordionItem;
  static Title = AccordionTitle;

  componentDidMount() {
    UIkit.util.on(this.ref, 'beforeshow', get(this.props, 'onBeforeShow', noop));
    UIkit.util.on(this.ref, 'show', get(this.props, 'onShow', noop));
    UIkit.util.on(this.ref, 'shown', get(this.props, 'onShown', noop));
    UIkit.util.on(this.ref, 'beforehide', get(this.props, 'onBeforeHide', noop));
    UIkit.util.on(this.ref, 'hide', get(this.props, 'onHide', noop));
    UIkit.util.on(this.ref, 'hidden', get(this.props, 'onHidden', noop));
  }

  componentWillReceiveProps(nextProps) {
    const animate = (this.props.animation !== false);
    const activeIndices = flatten([nextProps.activeIndex]);
    const { childNodes = [] } = this.ref;
    range(0, childNodes.length).forEach((itemIndex) => {
      const itemClasses = get(childNodes[itemIndex], 'classList', []);
      const isOpen = [...itemClasses].includes('uk-open');
      const shouldBeOpen = activeIndices.includes(itemIndex);
      if ((isOpen && !shouldBeOpen) || (!isOpen && shouldBeOpen)) {
        UIkit.accordion(this.ref).toggle(itemIndex, animate);
      }
    });
  }

  handleRef = element => (this.ref = element)

  render() {
    const {
      activeIndex,
      animation,
      as,
      children,
      className,
      collapsible,
      defaultIndex,
      margin,
      multiple,
      onBeforeShow,
      onShow,
      onShown,
      onBeforeHide,
      onHide,
      onHidden,
      padding,
      selectors,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Accordion.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    const componentOptions = getOptionsString({
      active: defaultIndex,
      animation: (animation !== false),
      collapsible,
      content: get(selectors, 'forContent', '> .uk-accordion-content'),
      duration: get(animation, 'duration', 200),
      multiple,
      targets: get(selectors, 'forTargets', '> *'),
      toggle: get(selectors, 'forToggle', '> .uk-accordion-title'),
      transition: get(animation, 'transition', 'ease'),
    });

    const Element = getElementType(Accordion, as, rest);
    return (
      <Element
        {...rest}
        className={classes}
        ref={this.handleRef}
        data-uk-accordion={componentOptions}
      >
        {children}
      </Element>
    );
  }
}

export default Accordion;
