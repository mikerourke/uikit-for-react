import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import flatten from 'lodash/flatten';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import {
  addEventInvoker,
  buildClassName,
  childMatchesType,
  customPropTypes,
  generateIdentifier,
  getOptionsString,
  HTML,
  joinListProp,
  recurseChildren,
  UIK,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
import ScrollspyItem from './ScrollspyItem';

export default class Scrollspy extends React.Component {
  static displayName = 'Scrollspy';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: ExtraPropTypes.requiredBy(
      'group',
      customPropTypes.mustContainChildOfType(ScrollspyItem),
    ),
    clsInview: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    delay: PropTypes.number,
    group: PropTypes.bool,
    hidden: PropTypes.bool,
    inviewAnimation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
    ]),
    offsetLeft: PropTypes.number,
    offsetTop: PropTypes.number,
    onInview: PropTypes.func,
    onOutview: PropTypes.func,
    repeat: PropTypes.bool,
    target: ExtraPropTypes.mutuallyExclusiveProps(
      PropTypes.string,
      'group',
      'target',
    ),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    onInview: noop,
    onOutview: noop,
  };

  static Item = ScrollspyItem;

  constructor(props) {
    super(props);
    this.ref = null;
    this.linkedAttr = generateIdentifier();
  }

  componentDidMount() {
    addEventInvoker(this.ref, 'inview', 'onInview', this.props);
    addEventInvoker(this.ref, 'outview', 'onOutview', this.props);
  }

  handleRef = element => (this.ref = element);

  renderChildren = children =>
    recurseChildren(children, child => {
      if (childMatchesType(child, ScrollspyItem)) {
        return React.cloneElement(child, {
          groupName: this.linkedAttr,
        });
      }
      return child;
    });

  render() {
    const {
      children,
      className,
      clsInview,
      delay,
      group,
      hidden,
      inviewAnimation,
      offsetLeft,
      offsetTop,
      repeat,
      ...rest
    } = this.props;

    const animationClasses = flatten([inviewAnimation]).map(name =>
      buildClassName('animation', name),
    );
    const componentClasses = joinListProp([
      ...animationClasses,
      ...flatten([clsInview]),
    ]);
    const componentOptions = getOptionsString({
      cls: componentClasses.replace(/\s| /g, ''),
      delay,
      hidden,
      offsetLeft,
      offsetTop,
      repeat,
    });

    const classes = classnames(className, 'uk-scrollspy');
    const selector = `[data-scrollspy-item="${this.linkedAttr}"]`;
    let targetToUse = this.props.target ? this.props.target : undefined;
    if (isNil(targetToUse) && group === true) targetToUse = selector;

    return (
      <Ref innerRef={this.handleRef}>
        <Base
          {...rest}
          className={classes}
          component={Scrollspy}
          uk-scrollspy={componentOptions}
          target={targetToUse}
        >
          {this.renderChildren(children)}
        </Base>
      </Ref>
    );
  }
}
