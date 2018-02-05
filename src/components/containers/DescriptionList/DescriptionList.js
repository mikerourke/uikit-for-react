import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import DescriptionDetails from './DescriptionDetails';
import DescriptionTerm from './DescriptionTerm';

export default class DescriptionList extends React.Component {
  static displayName = 'DescriptionList';

  static propTypes = {
    as: customPropTypes.customOrStringElement('dl'),
    children: customPropTypes.restrictToChildTypes(
      DescriptionDetails,
      DescriptionTerm,
    ),
    className: PropTypes.string,
    divider: PropTypes.bool,
  };

  static defaultProps = {
    as: 'dl',
    className: '',
    divider: false,
  };

  static Details = DescriptionDetails;
  static Term = DescriptionTerm;

  render() {
    const { as, className, divider, ...rest } = this.props;

    const ukClass = 'uk-description-list';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'divider')]: divider,
    });

    const Element = getElementType(DescriptionList, this.props);
    return <Element {...rest} className={classes} />;
  }
}
