import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

// Styles
import './projects.css';

// Components
import TopBar from '../../components/TopBar';
import TopNavigationMenu from '../../components/TopNavigationMenu';

const Projects = props => {
  return (
    <section id="projects">
      <Container className="project-container">
        <TopBar title="Projects" />
        <TopNavigationMenu />
      </Container>
    </section>
  );
};

export default connect(
  null,
  null
)(Projects);
