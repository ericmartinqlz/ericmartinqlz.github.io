import React, { Suspense } from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import './styles/Responsive.css';
import './assets/icons/css/EricMartinQLZ.css';

import Header from './scripts/components/Header';
import Loading from './scripts/pages/Loading';

const About = React.lazy(() => import('./scripts/pages/About'));
const Certificate = React.lazy(() => import('./scripts/pages/Certificate'));
const Timeline = React.lazy(() => import('./scripts/pages/Timeline'));
const Skill = React.lazy(() => import('./scripts/pages/Skill'));
const Project = React.lazy(() => import('./scripts/pages/Project'));
const Contact = React.lazy(() => import('./scripts/pages/Contact'));
const NotFound = React.lazy(() => import('./scripts/pages/NotFound'));

function App() {
  return (
    <HashRouter
    basename={'/'}>
      <div className="App">
        {/* Header - Mobile Bottom - Desktop Left */}
        <Header />

        {/* Main Section / Title Page / Content */}
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path={'/'} exact element={<About />} />
              <Route path={'/timeline'} exact element={<Timeline />} />
              <Route path={'/skill'} exact element={<Skill />}  />
              <Route path={'/certificate'} exact element={<Certificate />} />
              <Route path={'/project'} exact element={<Project />} />
              <Route path={'/contact'} exact element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
