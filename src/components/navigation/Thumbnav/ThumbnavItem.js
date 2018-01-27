/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isNil } from 'lodash';
import { buildClassName } from '../../../lib/index';
import { BlockElement, InlineElement } from '../../base/index';

export default class ThumbnavItem extends React.Component {
  static displayName = 'ThumbnavItem';

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    className: PropTypes.string,
    imageOptions: PropTypes.shape(InlineElement.propTypes),
    slideshowItem: PropTypes.number,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    active: false,
    className: null,
    imageOptions: null,
    slideshowItem: null,
  };

  render() {
    const {
      active,
      className,
      imageOptions,
      slideshowItem,
      ...rest
    } = this.props;

    const classes = classnames(className, {
      [buildClassName('active')]: active,
    });

    return (
      <BlockElement
        {...rest}
        as="li"
        className={classes || undefined}
        data-uk-slideshow-item={
          isNil(slideshowItem) ? undefined : slideshowItem
        }
      >
        <a href="#">
          <InlineElement {...imageOptions} as="img" />
        </a>
      </BlockElement>
    );
  }
}
