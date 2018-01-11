import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  buildStyles,
  commonPropTypes,
} from '../../lib';
import { UIK } from '../../lib/constants';

class Panel extends React.Component {
  static meta = {
    name: 'Panel',
    ukClass: 'uk-panel',
  };

  static propTypes = {
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.ANIMATIONS),
        reverse: PropTypes.bool,
        fast: PropTypes.bool,
        transformCenter: PropTypes.bool,
        transformOrigin: PropTypes.shape(commonPropTypes.shapeForPosition),
      }),
    ]),
    background: commonPropTypes.background,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
    scrollable: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    scrollable: false,
  };

  render() {
    const {
      animation,
      background,
      children,
      className,
      margin,
      padding,
      scrollable,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Panel.meta.ukClass,
      buildObjectOrValueClassNames('animation', animation),
      buildObjectOrValueClassNames('background', background),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      {
        [buildClassName(Panel.meta.ukClass, 'scrollable')]: (scrollable),
      },
    );
    const styles = buildStyles(this.props);

    return (
      <div
        {...rest}
        style={styles}
        className={classes || undefined}
      >
        {children}
      </div>
    );
  }
}

export default Panel;
