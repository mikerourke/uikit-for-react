import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
} from '../../lib';

class Dotnav extends React.Component {
  static meta = {
    name: 'Dotnav',
    ukClass: 'uk-dotnav',
  };

  static propTypes = {
    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    /** Display the dotnav vertically. */
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      children,
      className,
      margin,
      padding,
      vertical,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Dotnav.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
      buildClassName(Dotnav.meta.ukClass, 'vertical', vertical),
    );

    return (
      <ul
        {...rest}
        className={classes || undefined}
      >
        {children}
      </ul>
    );
  }
}

export default Dotnav;
