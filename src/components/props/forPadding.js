import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildObjectOrValueClassNames } from '../../lib';

export const paddingPropTypes = {
  padding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['large', 'small', 'remove']),
    PropTypes.shape({
      size: PropTypes.oneOf(['large', 'small']),
      removeTop: PropTypes.bool,
      removeBottom: PropTypes.bool,
      removeLeft: PropTypes.bool,
      removeRight: PropTypes.bool,
    }),
    PropTypes.shape({
      size: PropTypes.oneOf(['large', 'small']),
      removeVertical: PropTypes.bool,
      removeHorizontal: PropTypes.bool,
    }),
  ]),
};

export const getPaddingClassNames = paddingProps => classnames(
  buildObjectOrValueClassNames('padding', paddingProps),
);
