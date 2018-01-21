import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class CardFooter extends BlockElement {
  static meta = {
    name: 'CardFooter',
    ukClass: 'uk-card-footer',
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
        className={classnames(className, CardFooter.meta.ukClass)}
      />
    );
  }
}
