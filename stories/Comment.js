import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import {
  Block,
  Comment,
  Grid,
  Link,
  Subnav,
  Visibility,
} from '../src/components';
import { imageLinks } from './common';

Comment.displayName = 'Comment';

storiesOf('Comment', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Comment>
        <Grid as={Comment.Header} alignItems="middle" gutter="medium">
          <Grid.Cell width="auto">
            <Comment.Avatar src={imageLinks.avatar} width={80} height={80} />
          </Grid.Cell>
          <Grid.Cell width="expand">
            <Comment.Title as="h4" margin="remove">
              <Link reset>Author</Link>
            </Comment.Title>
            <Comment.Meta as={Subnav} divider margin={{ top: 'remove' }}>
              <Subnav.Item>12 days ago</Subnav.Item>
              <Subnav.Item>Reply</Subnav.Item>
            </Comment.Meta>
          </Grid.Cell>
        </Grid>
        <Comment.Body>
          <p>{faker.lorem.paragraph()}</p>
        </Comment.Body>
      </Comment>
    </Block>
  ))

  .add('Primary modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Comment primary>
        <Grid as={Comment.Header} alignItems="middle" gutter="medium">
          <Grid.Cell width="auto">
            <Comment.Avatar src={imageLinks.avatar} width={80} height={80} />
          </Grid.Cell>
          <Grid.Cell width="expand">
            <Comment.Title as="h4" margin="remove">
              <Link reset>Author</Link>
            </Comment.Title>
            <Comment.Meta as={Subnav} divider margin={{ top: 'remove' }}>
              <Subnav.Item>12 days ago</Subnav.Item>
              <Subnav.Item>Reply</Subnav.Item>
            </Comment.Meta>
          </Grid.Cell>
        </Grid>
        <Comment.Body>
          <p>{faker.lorem.paragraph()}</p>
        </Comment.Body>
      </Comment>
    </Block>
  ))

  .add('Comment list', () => (
    <Block margin={{ all: 'large' }}>
      <Comment.List>
        <Visibility.Togglable as={Comment}>
          <Comment.Header position="relative">
            <Grid alignItems="middle" gutter="medium">
              <Grid.Cell width="auto">
                <Comment.Avatar
                  src={imageLinks.avatar}
                  width={80}
                  height={80}
                />
              </Grid.Cell>
              <Grid.Cell width="expand">
                <Comment.Title as="h4" margin="remove">
                  <Link reset>Author</Link>
                </Comment.Title>
                <Comment.Meta margin={{ top: 'remove' }}>
                  <Link reset>12 days ago</Link>
                </Comment.Meta>
              </Grid.Cell>
            </Grid>
            <Visibility.Toggle
              as={Block}
              position={{
                at: 'top-right',
                marginSize: 'small',
              }}
              whenHovered="hidden"
            >
              <Link muted>Reply</Link>
            </Visibility.Toggle>
          </Comment.Header>
          <Comment.Body>
            <p>{faker.lorem.paragraph()}</p>
          </Comment.Body>
        </Visibility.Togglable>
        <Comment.List nested>
          <Visibility.Togglable as={Comment} primary>
            <Comment.Header position="relative">
              <Grid alignItems="middle" gutter="medium">
                <Grid.Cell width="auto">
                  <Comment.Avatar
                    src={imageLinks.avatar}
                    width={80}
                    height={80}
                  />
                </Grid.Cell>
                <Grid.Cell width="expand">
                  <Comment.Title as="h4" margin="remove">
                    <Link reset>Author</Link>
                  </Comment.Title>
                  <Comment.Meta margin={{ top: 'remove' }}>
                    <Link reset>12 days ago</Link>
                  </Comment.Meta>
                </Grid.Cell>
              </Grid>
              <Visibility.Toggle
                as={Block}
                position={{
                  at: 'top-right',
                  marginSize: 'small',
                }}
                whenHovered="hidden"
              >
                <Link muted>Reply</Link>
              </Visibility.Toggle>
            </Comment.Header>
            <Comment.Body>
              <p>{faker.lorem.paragraph()}</p>
            </Comment.Body>
          </Visibility.Togglable>
          <Visibility.Togglable as={Comment}>
            <Comment.Header position="relative">
              <Grid alignItems="middle" gutter="medium">
                <Grid.Cell width="auto">
                  <Comment.Avatar
                    src={imageLinks.avatar}
                    width={80}
                    height={80}
                  />
                </Grid.Cell>
                <Grid.Cell width="expand">
                  <Comment.Title as="h4" margin="remove">
                    <Link reset>Author</Link>
                  </Comment.Title>
                  <Comment.Meta margin={{ top: 'remove' }}>
                    <Link reset>12 days ago</Link>
                  </Comment.Meta>
                </Grid.Cell>
              </Grid>
              <Visibility.Toggle
                as={Block}
                position={{
                  at: 'top-right',
                  marginSize: 'small',
                }}
                whenHovered="hidden"
              >
                <Link muted>Reply</Link>
              </Visibility.Toggle>
            </Comment.Header>
            <Comment.Body>
              <p>{faker.lorem.paragraph()}</p>
            </Comment.Body>
          </Visibility.Togglable>
        </Comment.List>
      </Comment.List>
    </Block>
  ));
