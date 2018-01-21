import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class CardHeader extends BlockElement {
  static meta = {
    name: 'CardHeader',
    ukClass: 'uk-card-header',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    className: PropTypes.string,
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <BlockElement
        {...rest}
        as="div"
        className={classnames(className, CardHeader.meta.ukClass)}
      />
    );
  }
}
