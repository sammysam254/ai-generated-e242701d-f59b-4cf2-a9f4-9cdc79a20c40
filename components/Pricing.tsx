export default function Pricing() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <ul>
          <li>
            <h3 className="text-2xl font-bold">Basic</h3>
            <p>$9.99/month</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </li>
          <li>
            <h3 className="text-2xl font-bold">Premium</h3>
            <p>$19.99/month</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}