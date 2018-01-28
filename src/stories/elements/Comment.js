import React from 'react';
import { storiesOf } from '@storybook/react';
import { Comment, Container } from '../../components';

Comment.displayName = 'Comment';

storiesOf('Comment', module).add('Basic Usage', () => (
  <Container margin={{ all: 'large' }}>
    <Comment>
      <Comment.Header>
        <Comment.Title>Author</Comment.Title>
        <Comment.Meta>Test</Comment.Meta>
      </Comment.Header>
    </Comment>
  </Container>
));
