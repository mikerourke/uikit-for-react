import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HTML } from '../../lib';
import { BlockElement } from '../Base';

export default class CardTitle extends BlockElement {
  static meta = {
    name: 'CardTitle',
    ukClass: 'uk-card-title',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.HEADING_ELEMENTS),
      PropTypes.element,
      PropTypes.func,
    ]),
    className: PropTypes.string,
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <BlockElement
        {...rest}
        className={classnames(className, CardTitle.meta.ukClass)}
      />
    );
  }
}
