import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { addEventInvoker, customPropTypes, getOptionsString } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

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
    this.ref = null;
  }

  componentDidMount() {
    addEventInvoker(this.ref, 'beforescroll', 'onBeforeScroll', this.props);
    addEventInvoker(this.ref, 'scrolled', 'onScrolled', this.props);
  }

  handleRef = element => (this.ref = element);

  render() {
    const { scrollDuration, scrollOffset, smooth, ...rest } = this.props;

    const scrollOptions = getOptionsString({
      duration: scrollDuration,
      offset: scrollOffset,
    });

    return (
      <Ref innerRef={this.handleRef}>
        <Base
          {...rest}
          component={Totop}
          href="#"
          uk-totop=""
          uk-scroll={smooth ? scrollOptions : undefined}
        />
      </Ref>
    );
  }
}
