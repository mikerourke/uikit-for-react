import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';

Button.displayName = 'Button';

storiesOf('Button', module)
  .add('Basic Usage', () => (
    <div className="uk-margin-bottom">
      <Button>Default</Button>
      &nbsp;
      <Button disabled>Disabled</Button>
      &nbsp;
      <Button primary>
        Delete
      </Button>
    </div>
  ))

  .add('Style modifiers', () => (
    <div className="uk-margin-bottom">
      <Button>Default</Button>
      &nbsp;
      <Button primary>Primary</Button>
      &nbsp;
      <Button secondary>Secondary</Button>
      &nbsp;
      <Button danger>Danger</Button>
      &nbsp;
      <Button text>Text</Button>
      &nbsp;
      <Button link>Link</Button>
      &nbsp;
    </div>
  ));
