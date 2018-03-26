import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { customPropTypes, getOptionsString, HTML } from '../../../lib';
import Base from '../../base';

export default class Form extends React.Component {
  static displayName = 'Form';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('form'),
    children: PropTypes.node.isRequired,
    custom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
        selectorTarget: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      }),
    ]),
    horizontal: ExtraPropTypes.mutuallyExclusiveTrueProps(
      'horizontal',
      'stacked',
    ),
    stacked: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'form',
    horizontal: false,
    stacked: false,
  };

  render() {
    const { className, custom, horizontal, stacked, ...rest } = this.props;

    if (!isNil(custom)) {
      const componentOptions = getOptionsString({
        target: get(custom, 'selectorTarget'),
      });

      return (
        <Base
          {...rest}
          as={get(custom, 'as')}
          component={custom}
          uk-form-custom={componentOptions}
        />
      );
    }

    const classes = classnames(className, 'uk-form', {
      'uk-form-horizontal': horizontal,
      'uk-form-stacked': stacked,
    });

    return <Base {...rest} className={classes} component={Form} />;
  }
}
