import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import { buildClassName, getOptionsString } from '../../../lib';
import { BlockElement } from '../../base';

export default class Form extends React.Component {
  static displayName = 'Form';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    custom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        as: BlockElement.asPropType,
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
    ...BlockElement.defaultProps,
    className: '',
    custom: false,
    horizontal: false,
    stacked: false,
  };

  render() {
    const { className, custom, horizontal, stacked, ...rest } = this.props;

    if (!isNil(custom)) {
      const componentOptions = getOptionsString({
        target: get(custom, 'selectorTarget', false),
      });

      return (
        <BlockElement
          {...rest}
          as={get(custom, 'as', 'div')}
          data-uk-form-custom={componentOptions}
        />
      );
    }

    const ukClass = 'uk-form';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'horizontal')]: horizontal,
      [buildClassName(ukClass, 'stacked')]: stacked,
    });

    return <BlockElement {...rest} as="form" className={classes} />;
  }
}
