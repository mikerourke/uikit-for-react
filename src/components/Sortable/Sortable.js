// TODO: Finish this.
import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import isBoolean from 'lodash/isBoolean';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  buildSelector,
  customPropTypes,
  generateSelector,
  getOptionsString,
  HTML,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

export default class Sortable extends React.Component {
  static displayName = 'Sortable';

  static propTypes = {
    ...Base.propTypes,
    animationDuration: ExtraPropTypes.nonNegativeInteger,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    clsBase: PropTypes.string,
    clsCustom: PropTypes.string,
    clsDrag: PropTypes.string,
    clsDragState: PropTypes.string,
    clsEmpty: PropTypes.string,
    clsItem: PropTypes.string,
    clsNoDrag: PropTypes.string,
    clsPlaceholder: PropTypes.string,
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
    ...Base.defaultProps,
    animationDuration: 150,
    as: 'ul',
    onAdded: noop,
    onMoved: noop,
    onRemoved: noop,
    onStart: noop,
    onStop: noop,
  };

  constructor(props) {
    super(props);
    this.ref = null;
    this.selector = generateSelector();
  }

  componentDidMount() {
    const ukToPropsEventMap = {
      added: 'onAdded',
      moved: 'onMoved',
      removed: 'onRemoved',
      start: 'onStart',
      stop: 'onStop',
    };

    addMultipleEventInvokers(this.ref, ukToPropsEventMap, this.props);
  }

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

  handleRef = element => (this.ref = element);

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
      group,
      selectorHandle,
      threshold,
      ...rest
    } = this.props;

    const componentOptions = getOptionsString({
      animation: animationDuration,
      clsBase,
      clsCustom,
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
      <Ref innerRef={this.handleRef}>
        <Base {...rest} component={Sortable} uk-sortable={componentOptions}>
          {this.renderChildren(children)}
        </Base>
      </Ref>
    );
  }
}
