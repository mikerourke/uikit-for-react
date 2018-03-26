import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getBaseRef } from '../../../lib';
import Base from '../../base';
import AccordionContent from './AccordionContent';
import AccordionTitle from './AccordionTitle';

/**
 * Component with the required Content and Title elements.
 * @see https://getuikit.com/docs/accordion#usage
 */
export default class AccordionPanel extends React.Component {
  static displayName = 'AccordionPanel';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('li'),
    children: customPropTypes.restrictToChildTypes(
      AccordionContent,
      AccordionTitle,
    ),
    open: PropTypes.bool,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'li',
    open: false,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      const panelRef = this.ref;
      const titleElement = panelRef.querySelector('.uk-accordion-title');
      if (titleElement) titleElement.click();
    }
  }

  handleRef = element => {
    if (!element) return;
    this.ref = getBaseRef(element);
  };

  render() {
    const { className, open, ...rest } = this.props;
    const classes = classnames(className, { 'uk-open': open });
    return (
      <Base
        {...rest}
        baseRef={this.handleRef}
        className={classes || undefined}
        component={AccordionPanel}
      />
    );
  }
}
