import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Division, Progress } from '../src/components';

Progress.displayName = 'Progress';

storiesOf('Progress', module).add('Usage', () => (
  <Division margin={{ all: 'large' }}>
    <Progress
      value={10}
      max={100}
      interval={1000}
      step={10}
      onComplete={() => console.log('Yay')}
    />
  </Division>
));
