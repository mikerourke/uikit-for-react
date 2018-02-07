import React from 'react';
import VisibilityTogglable from './VisibilityTogglable';
import VisibilityToggle from './VisibilityToggle';

export default class Visibility extends React.Component {
  static displayName = 'Visibility';
  static Togglable = VisibilityTogglable;
  static Toggle = VisibilityToggle;
}
