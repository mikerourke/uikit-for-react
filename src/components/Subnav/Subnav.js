import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
} from '../../lib';
import SubnavItem from './SubnavItem';

class Subnav extends React.Component {
  static meta = {
    name: 'Subnav',
    ukClass: 'uk-subnav',
  };

  static propTypes = {
    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    divider: PropTypes.bool,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,

    pill: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
  };

  static Item = SubnavItem;

  render() {
    const {
      children,
      className,
      divider,
      margin,
      padding,
      pill,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Subnav.meta.ukClass,
      buildClassName('subnav', 'divider', divider),
      buildClassName('subnav', 'pill', pill),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    return (
      <ul
        {...rest}
        className={classes}
      >
        {children}
      </ul>
    );
  }
}

export default Subnav;
