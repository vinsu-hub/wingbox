import {Route,Switch} from 'wouter';
import {MotionConfig} from 'framer-motion';
import {Header,Footer} from './components/Layout';
import HomePage from './pages/HomePage';
import {AboutPage,ServicesPage,ServiceDetailPage,TeamPage,ClientsPage,ContactPage,NotFoundPage} from './pages/Pages';
export default function App(){return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><Switch><Route path="/" component={HomePage}/><Route path="/about" component={AboutPage}/><Route path="/services" component={ServicesPage}/><Route path="/services/:slug">{params=><ServiceDetailPage slug={params.slug}/>}</Route><Route path="/our-team" component={TeamPage}/><Route path="/our-clients" component={ClientsPage}/><Route path="/contact" component={ContactPage}/><Route component={NotFoundPage}/></Switch></main><Footer/></MotionConfig>}
