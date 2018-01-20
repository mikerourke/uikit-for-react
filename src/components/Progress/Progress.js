import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { Inline } from '../Base';

const Progress = ({ className, ...rest }) => (
  <Inline
    {...rest}
    as="progress"
    className={classnames(className, Progress.meta.ukClass)}
  />
);

Progress.propTypes = {
  ...omit(Inline.propTypes, 'as'),
  className: PropTypes.string,
};

Progress.meta = {
  name: 'Progress',
  ukClass: 'uk-progress',
};

export default Progress;
