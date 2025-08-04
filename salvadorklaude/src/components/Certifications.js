export default function Certifications() {
    return (
      <section id="certifications" className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Cert 1 */}
          <div className="bg-gray-800 p-4 rounded-2xl card text-left">
            <h4 className="font-bold">IT Specialist – Databases</h4>
            <p>Issued by Certiport</p>
            <a
              href="https://www.credly.com/badges/1bac404f-6115-4199-a1f9-aebc8190955b/public_url"
              className="inline-block mt-2 text-yellow-400 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>
  
          {/* Cert 2 */}
          <div className="bg-gray-800 p-4 rounded-2xl card text-left">
            <h4 className="font-bold">IT Specialist - HTML & CSS</h4>
            <p>Issued by Certiport</p>
            <a
              href="https://www.credly.com/badges/63bb2a67-7c34-416b-b353-31adf81e9df0/public_url"
              className="inline-block mt-2 text-yellow-400 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>

          <div className="bg-gray-800 p-4 rounded-2xl card text-left">
            <h4 className="font-bold">IT Specialist - Networking</h4>
            <p>Issued by Certiport</p>
            <a
              href="https://www.credly.com/badges/1fa10ee7-5321-4d8d-a871-20a5446282ab/public_url"
              className="inline-block mt-2 text-yellow-400 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>

          <div className="bg-gray-800 p-4 rounded-2xl card text-left">
            <h4 className="font-bold">JavaScript Essentials 1</h4>
            <p>Issued by Cisco</p>
            <a
              href="https://www.credly.com/badges/96766843-c643-439b-914c-824bc629b86b/public_url"
              className="inline-block mt-2 text-yellow-400 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>

          <div className="bg-gray-800 p-4 rounded-2xl card text-left">
            <h4 className="font-bold">CCNA: Enterprise Networking, Security, and Automation</h4>
            <p>Issued by Cisco</p>
            <a
              href="https://www.credly.com/badges/47a06755-bce6-4383-817d-ad76270a8ce3/public_url"
              className="inline-block mt-2 text-yellow-400 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>
          
        </div>
      </section>
    );
  }
  