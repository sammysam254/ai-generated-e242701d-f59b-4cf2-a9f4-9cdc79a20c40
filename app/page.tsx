import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { supabaseClient } from '../supabaseClient';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabaseClient.from('features').select('*');
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <Hero />
      <Features loading={loading} />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}