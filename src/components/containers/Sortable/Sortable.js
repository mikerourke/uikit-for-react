import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { isBoolean, isNil, noop } from 'lodash';
import {
  buildSelector,
  generateSelector,
  getBaseRef,
  getOptionsString,
} from '../../../lib';
import { BaseElement, BlockElement } from '../../base';

export default class Sortable extends React.Component {
  static displayName = 'Sortable';

  static propTypes = {
    ...BlockElement.propTypes,
    animationDuration: ExtraPropTypes.nonNegativeInteger,
    as: BlockElement.asPropType,
    children: PropTypes.node,
    className: PropTypes.string,
    clsBase: PropTypes.string,
    clsCustom: PropTypes.string,
    clsDrag: PropTypes.string,
    clsDragState: PropTypes.string,
    clsEmpty: PropTypes.string,
    clsItem: PropTypes.string,
    clsNoDrag: PropTypes.string,
    clsPlaceholder: PropTypes.string,
    dragOptions: PropTypes.shape(BaseElement.propTypes),
    group: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    onAdded: PropTypes.func,
    onMoved: PropTypes.func,
    onRemoved: PropTypes.func,
    onStart: PropTypes.func,
    onStop: PropTypes.func,
    selectorHandle: PropTypes.string,
    threshold: ExtraPropTypes.nonNegativeInteger,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    animationDuration: 150,
    as: 'ul',
    className: '',
    clsBase: 'uk-sortable',
    clsCustom: '',
    clsDrag: 'uk-sortable-drag',
    clsDragState: 'uk-sortable-dragging',
    clsEmpty: 'uk-sortable-empty',
    clsItem: 'uk-sortable-item',
    clsNoDrag: 'uk-sortable-nodrag',
    clsPlaceholder: 'uk-sortable-placeholder',
    group: '',
    onAdded: noop,
    onMoved: noop,
    onRemoved: noop,
    onStart: noop,
    onStop: noop,
    threshold: 10,
  };

  constructor() {
    super();
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ref = this.getRef();
    UIkit.util.on(ref, 'added', this.props.onAdded);
    UIkit.util.on(ref, 'moved', this.props.onMoved);
    UIkit.util.on(ref, 'removed', this.props.onRemoved);
    UIkit.util.on(ref, 'start', this.props.onStart);
    UIkit.util.on(ref, 'stop', this.props.onStop);
  }

  getRef = () => (isNil(this.ref) ? `.${this.selector}` : this.ref);

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  activateSortedItems = children =>
    React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child;
      if (child.props.sorted) {
        return React.cloneElement(child, {
          className: classnames(child.props.className, this.selector),
          children: this.activateSortedItems(child.props.children),
        });
      }
      return child;
    });

  renderChildren = children => this.activateSortedItems(children);

  render() {
    const {
      animationDuration,
      children,
      clsBase,
      clsCustom,
      clsDrag,
      clsDragState,
      clsEmpty,
      clsItem,
      clsNoDrag,
      clsPlaceholder,
      dragOptions,
      group,
      selectorHandle,
      threshold,
      ...rest
    } = this.props;

    const { inheritedClasses } = BaseElement.getInheritedProps(dragOptions);

    const componentOptions = getOptionsString({
      animation: animationDuration,
      clsBase,
      clsCustom: buildSelector(clsCustom, inheritedClasses),
      clsDrag,
      clsDragState,
      clsEmpty,
      clsItem,
      clsNoDrag,
      clsPlaceholder,
      group: isBoolean(group) ? 'sortable-group' : group,
      handle: buildSelector(selectorHandle, this.selector),
      threshold,
    });

    return (
      <BlockElement
        {...rest}
        ref={this.handleRef}
        data-uk-sortable={componentOptions}
      >
        {this.renderChildren(children)}
      </BlockElement>
    );
  }
}
