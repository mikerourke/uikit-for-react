import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '../components/Alert';
import Article from '../components/Article';
import Base from '../components/Base';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Panel from '../components/Panel';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Badge from '../components/Badge';
import Flex from '../components/Flex';

const backgroundProps = {
  size: 'contain',
  imageUrl: 'https://getuikit.com/docs/images/dark.jpg',
  position: {
    horizontal: 'center',
    vertical: 'center',
  },
  norepeat: true,
  breakpoint: '@s',
};

const BreadcrumbTest = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Test</Breadcrumb.Item>
    <Breadcrumb.Item>Test 2</Breadcrumb.Item>
    <Breadcrumb.Item>Test 3</Breadcrumb.Item>
  </Breadcrumb>
);

const FlexTest = () => (
  <Flex margin={{ all: 'large' }}>
    <Base as="div" width="1/5">Hooray</Base>
    <Base as="div" width="1/5">Hooray</Base>
    <Base as="div" width="1/5">Hooray</Base>
    <Base as="div" width="1/5">Hooray</Base>
    <Base as="div" width="1/5">Hooray</Base>
  </Flex>
);

const ContainerTest = () => (
  <Container>
    <Badge>100</Badge>
    <Button margin padding="remove">Button</Button>
    <Button padding={{ size: 'large', removeVertical: true }}>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button.Group padding="large">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Button.Group>
  </Container>
);

const PanelTest = () => (
  <Panel
    animation={{ nameOf: 'slide-top' }}
    margin={{ top: true, bottom: 'small' }}
    // margin
    // marginContainer
    className="test"
    // padding="large"
    background={backgroundProps}
    // viewport={{ offsetTop: true, offsetBottom: 8 }}
    // height="full"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </Panel>
);

const AlertTest = () => {
  let alertVisible = true;
  const handleClick = () => { alertVisible = true; };
  return (
    <Container>
      <Button onClick={handleClick}>Test</Button>
      <Alert
        closeable
        closeOptions={{ large: true, margin: true, padding: 'large' }}
        animation={{ duration: 300 }}
        margin="large"
        padding="large"
      >
        This is an alert test
      </Alert>
    </Container>
  );
};

const ArticleTest = () => (
  <Article>
    <Article.Title>Test</Article.Title>
    <Article.Meta>Test</Article.Meta>
  </Article>
);

storiesOf('Margin', module)
  .add('Basic Usage', () => (
    <div>
      <ArticleTest />
      <Divider />
      <PanelTest />
      <ContainerTest />
      <AlertTest />
    </div>
  ));
