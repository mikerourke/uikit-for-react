import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  buildObjectOrValueClassNames,
  commonPropTypes,
} from '../../lib';
import DescriptionDetails from './DescriptionDetails';
import DescriptionTerm from './DescriptionTerm';

class DescriptionList extends React.Component {
  static meta = {
    name: 'DescriptionList',
    ukClass: 'uk-description-list',
  };

  static propTypes = {
    /** Contents to display in the element. */
    children: PropTypes.node.isRequired,

    /** Additional classes to apply to element. */
    className: PropTypes.string,

    /** Add a horizontal line between list items. */
    divider: PropTypes.bool,

    /** Options for adding spacing between elements. */
    margin: commonPropTypes.margin,

    /** Options for adding spacing between elements and their content. */
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    className: '',
  };

  static Details = DescriptionDetails;
  static Term = DescriptionTerm;

  render() {
    const {
      children,
      className,
      divider,
      margin,
      padding,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      DescriptionList.meta.ukClass,
      buildClassName(DescriptionList.meta.ukClass, 'divider', divider),
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    return (
      <dl
        {...rest}
        className={classes || undefined}
      >
        {children}
      </dl>
    );
  }
}

export default DescriptionList;
