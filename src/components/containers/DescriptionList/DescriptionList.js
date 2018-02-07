import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Inverse, Margin, Width } from '../../common';
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
    flex: Flex.propTypes,
    inverse: Inverse.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'dl',
    className: '',
    divider: false,
  };

  static Details = DescriptionDetails;
  static Term = DescriptionTerm;

  render() {
    const {
      as,
      className,
      divider,
      flex,
      inverse,
      margin,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-description-list',
      Flex.getClasses(flex),
      Inverse.getClasses(inverse),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-description-list-divider': divider,
      },
    );

    const Element = getElementType(DescriptionList, as);
    return <Element {...rest} className={classes} />;
  }
}
