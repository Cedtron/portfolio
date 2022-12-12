import React from 'react';
import Layout from '../components/layout/layout'
import Slider from '../components/slider'
import About from '../components/about'
import Service from '../components/service'
import Skills from '../components/skills'
import Client from '../components/client'
import Contact from '../components/contact'
export default function Home() {
  return (
<div>
  <Layout>
<Slider />
<About />
<Service />
<Skills />
<Client />
<Contact />
  </Layout>
</div>
  );
}

