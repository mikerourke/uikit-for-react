import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineElement } from '../Base';

const Progress = ({ className, ...rest }) => (
  <InlineElement
    {...rest}
    as="progress"
    className={classnames(className, Progress.meta.ukClass)}
  />
);

Progress.propTypes = {
  ...InlineElement.propTypes,
  className: PropTypes.string,
};

Progress.meta = {
  name: 'Progress',
  ukClass: 'uk-progress',
};

export default Progress;
