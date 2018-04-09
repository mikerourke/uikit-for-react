import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import {
  addEventInvoker,
  customPropTypes,
  getOptionsString,
  LibraryComponent,
} from '../../lib';
import Base from '../Base';

export default class Totop extends React.Component {
  static displayName = 'Totop';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('a'),
    onBeforeScroll: PropTypes.func,
    onScrolled: PropTypes.func,
    scrollDuration: PropTypes.number,
    scrollOffset: PropTypes.number,
    smooth: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
    onBeforeScroll: noop,
    onScrolled: noop,
  };

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('scroll-totop');
  }

  componentDidMount() {
    const totop = this.libComp.domNode;
    addEventInvoker(totop, 'beforescroll', 'onBeforeScroll', this.props);
    addEventInvoker(totop, 'scrolled', 'onScrolled', this.props);
  }

  render() {
    const { scrollDuration, scrollOffset, smooth, ...rest } = this.props;

    const scrollOptions = getOptionsString({
      duration: scrollDuration,
      offset: scrollOffset,
    });

    return (
      <Base
        {...rest}
        component={Totop}
        href="#"
        uk-totop=""
        uk-scroll={smooth ? scrollOptions : undefined}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
