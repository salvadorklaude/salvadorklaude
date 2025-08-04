export default function Projects() {
    return (
      <section id="projects" className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-6">Previous Projects</h2>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-2xl card">
            <img src="/img/seamac2.png" alt="CourseForge" className="w-full rounded mb-4" />
            <h3 className="text-xl font-bold">CourseForge</h3>
            <p>Used by: SEAMAC International Training Institute</p>
            <ul className="list-disc list-inside text-left max-w-xl mx-auto">
              <li>Role: Back-end Developer</li>
              <li>Features: Dark Mode, Responsive Layout, Recommender System</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl card">
            <img src="/img/Feathers.jpg" alt="Feathers Portal" className="w-full rounded mb-4" />
            <h3 className="text-xl font-bold">Feathers Portal</h3>
            <ul className="list-disc list-inside text-left max-w-xl mx-auto">
              <li>Role: Full-Stack Developer</li>
              <li>Features: Donation System, Mobile Responsive UI, User-friendly features</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  