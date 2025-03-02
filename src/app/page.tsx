export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m Tâm Đạt
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Backend Game Developer | Java Specialist | System Architect
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              I&apos;m a passionate Backend Game Developer with expertise in Java and distributed systems. 
              My focus is on building robust, scalable game server architectures that can handle thousands 
              of concurrent players while maintaining optimal performance.
            </p>
            <p className="mb-4">
              With deep experience in Java and Netty, I specialize in developing high-performance 
              networking solutions for real-time multiplayer games. I&apos;m particularly interested 
              in solving complex technical challenges related to game state synchronization, 
              latency optimization, and server-side game logic.
            </p>
            <p>
              Beyond my core expertise in Java game development, I also have working knowledge 
              of Node.js and PHP, allowing me to contribute to full-stack development when needed. 
              I&apos;m always eager to learn new technologies and best practices in game server architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Java</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Netty</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Spring Boot</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Microservices</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Node.js</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">PHP</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Redis</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">MySQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Game Server Architecture
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed and implemented a scalable game server architecture using Java and Netty, 
                  supporting 10,000+ concurrent players with low latency networking.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
                    Netty
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
                    Redis
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Real-time Combat System
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built a real-time combat system with precise hit detection and state synchronization
                  for a multiplayer action game.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
                    WebSocket
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
                    MySQL
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Game Analytics Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developed a comprehensive analytics platform for tracking player behavior,
                  game metrics, and server performance in real-time.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
                    PHP
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Get In Touch
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/nguyentamdat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nguyentamdat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:nguyentamdat@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
