import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  buildStyles,
  commonPropTypes,
} from '../../lib';

class Panel extends React.Component {
  static meta = {
    name: 'Panel',
    ukClass: 'uk-panel',
  };

  static propTypes = {
    animation: commonPropTypes.animation,

    background: commonPropTypes.background,

    /** Contents to display in the component. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /** Indicates if the panel is scrollable. */
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
