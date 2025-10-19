import { useState, useEffect } from 'react';
import { supabaseClient } from '../supabaseClient';

export default function Features({ loading }: { loading: boolean }) {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const { data, error } = await supabaseClient.from('features').select('*');
        setFeatures(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h2 className="text-3xl font-bold">Features</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <h3 className="text-2xl font-bold">{feature.name}</h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}