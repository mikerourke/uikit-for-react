import React from 'react';
import first from 'lodash/first';
import get from 'lodash/get';

export default function renderNavItemChildren(
  children,
  { href = '#', isSpan = false } = {},
) {
  const childElements = React.Children.toArray(children);
  const firstElement = first(childElements);

  if (get(firstElement, 'type', '') !== 'a') {
    const InnerElement = isSpan ? 'span' : 'a';
    return <InnerElement href={href}>{children}</InnerElement>;
  }

  return children;
}
