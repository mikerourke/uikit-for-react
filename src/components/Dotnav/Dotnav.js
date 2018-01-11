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
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
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
