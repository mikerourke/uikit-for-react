import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import {
  Base,
  Comment,
  Grid,
  Link,
  SubNav,
  Visibility,
} from '../../components';
import { imageLinks } from '../common';

Comment.displayName = 'Comment';

storiesOf('Comment', module)
  .add('Usage', () => (
    <Base margin={{ all: 'large' }}>
      <Comment>
        <Grid as={Comment.Header} alignItems="middle" gutter="medium">
          <Grid.Cell width="auto">
            <Comment.Avatar src={imageLinks.avatar} width={80} height={80} />
          </Grid.Cell>
          <Grid.Cell width="expand">
            <Comment.Title as="h4" margin="remove">
              <Link reset>Author</Link>
            </Comment.Title>
            <Comment.Meta as={SubNav} divider>
              <SubNav.Item>12 days ago</SubNav.Item>
              <SubNav.Item>Reply</SubNav.Item>
            </Comment.Meta>
          </Grid.Cell>
        </Grid>
        <Comment.Body>
          <p>{faker.lorem.paragraph()}</p>
        </Comment.Body>
      </Comment>
    </Base>
  ))

  .add('Primary modifier', () => (
    <Base margin={{ all: 'large' }}>
      <Comment primary>
        <Grid as={Comment.Header} alignItems="middle">
          <Grid.Cell width="auto">
            <Comment.Avatar src={imageLinks.avatar} width={80} height={80} />
          </Grid.Cell>
          <Grid.Cell width="expand">
            <Comment.Title as="h4" margin="remove">
              <Link reset>Author</Link>
            </Comment.Title>
            <Comment.Meta as={SubNav} divider>
              <SubNav.Item>12 days ago</SubNav.Item>
              <SubNav.Item>Reply</SubNav.Item>
            </Comment.Meta>
          </Grid.Cell>
        </Grid>
        <Comment.Body>
          <p>{faker.lorem.paragraph()}</p>
        </Comment.Body>
      </Comment>
    </Base>
  ))

  // TODO: Fix this, the list style isn't working
  .add('Comment list', () => (
    <Base margin={{ all: 'large' }}>
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
              as={Base}
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
                as={Base}
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
                as={Base}
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
    </Base>
  ));
