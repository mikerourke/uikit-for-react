import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  customPropTypes,
  getOptionsString,
  HTML,
  UIK,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
import Tab from '../Tab';

export default class SwitcherToggles extends React.Component {
  static displayName = 'SwitcherToggles';

  static propTypes = {
    ...Base.propTypes,
    activeIndex: customPropTypes.validateIndex,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
      PropTypes.shape({
        in: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        out: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        duration: PropTypes.number,
      }),
    ]),
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    defaultIndex: customPropTypes.validateIndex,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    selectorConnect: PropTypes.string,
    selectorToggle: PropTypes.string,
    swiping: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    activeIndex: 0,
    as: 'ul',
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
  };

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    const switcher = UIkit.switcher(this.ref);

    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
    };
    addMultipleEventInvokers(switcher, ukToPropsEventMap, this.props);
    switcher.show(this.props.activeIndex);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      // TODO: Find out why you're using a tab element.
      UIkit.tab(this.ref).show(nextProps.activeIndex);
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      animation,
      as,
      defaultIndex,
      selectorConnect,
      selectorToggle,
      swiping,
      ...rest
    } = this.props;

    const componentOptions = getOptionsString({
      active: defaultIndex,
      animation,
      connect: selectorConnect,
      swiping,
      toggle: selectorToggle,
    });

    return (
      <Ref innerRef={this.handleRef}>
        <Base
          {...rest}
          as={as}
          component={SwitcherToggles}
          uk-switcher={get(as, 'type') === Tab ? undefined : componentOptions}
        />
      </Ref>
    );
  }
}
