import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from '../components/Accordion';
import Alert from '../components/Alert';
import Article from '../components/Article';
import Base from '../components/Base';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Card from '../components/Card';
import Panel from '../components/Panel';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Badge from '../components/Badge';
import Flex from '../components/Flex';
import Subnav from '../components/Subnav';

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

class AccordionTest extends React.Component {
  state = {
    activeIndex: [0],
  };

  onClick = () => {
    this.setState({ activeIndex: [1, 2] });
  };

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>Test</Button>
        <Accordion
          margin={{ all: 'large' }}
          activeIndex={this.state.activeIndex}
          multiple
        >
          <Accordion.Item>
            <Accordion.Title>Test</Accordion.Title>
            <Accordion.Content>This is some content.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Title>Test 2</Accordion.Title>
            <Accordion.Content>This is some content.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Title>Test 3</Accordion.Title>
            <Accordion.Content>This is some content.</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

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
        onHide={() => console.log('Hooray')}
      >
        This is an alert test
      </Alert>
    </Container>
  );
};

const ArticleTest = () => (
  <Article margin={{ all: 'large' }}>
    <Article.Title>Test</Article.Title>
    <Article.Meta>Test</Article.Meta>
    <Article.Lead>This is a test paragragh</Article.Lead>
    <p>This is some more text for the article, hooray</p>
  </Article>
);

const CardTest = () => (
  <Card hover>
    <Card.Header>
      <Card.Title>This is a test card</Card.Title>
    </Card.Header>
    <Card.Body>
      <p>This is some text</p>
      <Button icon="twitter" />
    </Card.Body>
    <Card.Footer>
      <Button text href="#">Read more</Button>
    </Card.Footer>
  </Card>
);

const SubnavTest = () => (
  <Subnav>
    <Subnav.Item href="#">Test 1</Subnav.Item>
    <Subnav.Item href="#">Test 2</Subnav.Item>
    <Subnav.Item href="#">Test</Subnav.Item>
  </Subnav>
);

storiesOf('Margin', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'medium' }}>
      <CardTest />
      {/*<ArticleTest />*/}
      {/*<Divider />*/}
      {/*<PanelTest />*/}
      {/*<ContainerTest />*/}
      {/*<AlertTest />*/}
      {/*<AccordionTest />*/}
      <SubnavTest />
    </Container>
  ));
