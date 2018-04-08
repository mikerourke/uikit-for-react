import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import DescriptionDetails from './DescriptionDetails';
import DescriptionTerm from './DescriptionTerm';

export default class DescriptionList extends React.Component {
  static displayName = 'DescriptionList';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('dl'),
    children: customPropTypes.restrictToChildTypes(
      DescriptionDetails,
      DescriptionTerm,
    ),
    divider: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'dl',
    divider: false,
  };

  static Details = DescriptionDetails;
  static Term = DescriptionTerm;

  render() {
    const { className, divider, ...rest } = this.props;

    const classes = classnames(className, 'uk-description-list', {
      'uk-description-list-divider': divider,
    });

    return <Base {...rest} className={classes} component={DescriptionList} />;
  }
}
