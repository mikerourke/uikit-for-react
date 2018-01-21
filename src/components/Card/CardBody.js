import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class CardBody extends BlockElement {
  static meta = {
    name: 'CardBody',
    ukClass: 'uk-card-body',
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
        className={classnames(className, CardBody.meta.ukClass)}
      />
    );
  }
}
