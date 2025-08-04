export default function Certifications() {
    return (
      <section id="certifications" className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded-2xl card text-left">
            <h4 className="font-bold">IT Specialist – Databases</h4>
            <p>Issued by Certiport</p>
            <a href="https://www.credly.com/badges/1bac404f-6115-4199-a1f9-aebc8190955b/public_url" className="inline-block mt-2 text-yellow-400 hover:underline">View Credential</a>
          </div>
        </div>
      </section>
    );
  }