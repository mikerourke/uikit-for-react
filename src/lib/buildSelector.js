import classnames from 'classnames';

const sanitizeSelector = selector => {
  const validString = selector.replace(/\./gi, ' ');
  const selectorElements = validString
    .split(' ')
    .filter(selectorElement => selectorElement.length > 0);
  const selectorString = selectorElements.join('.');
  return `.${selectorString}`;
};

const buildSelector = (...args) => {
  const classElements = [...args];
  const classes = classnames(classElements);
  return sanitizeSelector(classes);
};

export default buildSelector;
