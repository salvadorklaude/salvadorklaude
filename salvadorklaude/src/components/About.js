export default function About() {
    return (
      <section id="bio" className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <img src="/img/klod.jpg" alt="My Picture" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-md" />
        <p className="max-w-xl mx-auto">
          I’m a 22-year-old IT enthusiast currently studying at Far Eastern University – Tech. Passionate about full-stack development and infrastructure, I’ve worked on projects ranging from donation platforms to school management systems. With a strong background in communication and teamwork, I aim to build solutions that make a difference.
        </p>
        <a
          href="/files/Klaude_Salvador.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex resume-button items-center mt-4 bg-blue-600 text-white px-5 py-2 rounded-full"
        >
          View My Resume
        </a>
      </section>
    );
  }