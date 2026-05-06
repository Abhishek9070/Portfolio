import FooterSection from "../components/layout/FooterSection";

export default function EducationalContentPage() {
  const playlists = [
    {
      source:
        "https://www.youtube.com/embed/videoseries?list=PLNPuhCAq8EQ1cX-Qaa0Gpo1ihujPEpr1u",
      title: "Programming Fundamentals",
      description:
        "Comprehensive playlist covering programming concepts, data structures, and algorithm fundamentals for beginners and intermediate learners.",
      stats: ["Complete Series", "Educational", "Beginner Friendly"],
      url: "https://www.youtube.com/playlist?list=PLNPuhCAq8EQ1cX-Qaa0Gpo1ihujPEpr1u",
    },
    {
      source:
        "https://www.youtube.com/playlist?list=PLNPuhCAq8EQ0qwV4MqLWQ4NupGaq_a_zL",
      title: "DSA",
      description:
        "Know the technique to understand DSA.",
      stats: ["Complete Series", "Advanced", "Industry Level"],
      url: "https://www.youtube.com/playlist?list=PLNPuhCAq8EQ1r1omC5WlXGr7BzsKMx8I2",
    },
  ];

  const topicCards = [
    {
      icon: "fa-solid fa-code",
      title: "Data Structures",
      description:
        "Arrays, linked lists, stacks, queues, trees, graphs, and advanced data structures.",
    },
    {
      icon: "fa-solid fa-puzzle-piece",
      title: "Algorithms",
      description:
        "Sorting, searching, dynamic programming, greedy algorithms, and optimization techniques.",
    },
    {
      icon: "fa-brands fa-python",
      title: "Programming Languages",
      description:
        "Python, C++, JavaScript fundamentals, and advanced programming concepts.",
    },
    {
      icon: "fa-solid fa-brain",
      title: "Problem Solving",
      description:
        "Competitive programming, interview preparation, and analytical thinking.",
    },
    {
      icon: "fa-solid fa-robot",
      title: "AI and Technology",
      description:
        "Artificial intelligence concepts, machine learning basics, and emerging technologies.",
    },
    {
      icon: "fa-solid fa-globe",
      title: "Web Development",
      description:
        "Frontend and backend development, frameworks, and modern web technologies.",
    },
  ];

  return (
    <div className="page-shell">
      <section className="educational-content-showcase">
        <div className="showcase-container">
          <div className="showcase-header">
            <h1>Educational Content</h1>
            <p>
              Comprehensive YouTube playlists and tutorials I&apos;ve created for
              Neural Cipher.
            </p>
            <a
              href="https://www.youtube.com/@neural_cipher"
              target="_blank"
              rel="noreferrer"
              className="yt-channel-link"
            >
              <i className="fa-brands fa-youtube" /> Visit Neural Cipher Channel
            </a>
          </div>

          <div className="section-divider">
            <div className="section-header-inline">
              <h2>
                <i className="fa-solid fa-graduation-cap" /> Complete Tutorial
                Playlists
              </h2>
              <p>
                Structured learning paths covering programming fundamentals to advanced
                topics.
              </p>
            </div>

            <div className="playlist-gallery">
              {playlists.map((playlist) => (
                <div className="playlist-item" key={playlist.title}>
                  <div className="playlist-embed">
                    <iframe
                      src={playlist.source}
                      title={playlist.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="playlist-info">
                    <h3>{playlist.title}</h3>
                    <p>{playlist.description}</p>
                    <div className="playlist-stats">
                      {playlist.stats.map((stat) => (
                        <span className="stat" key={`${playlist.title}-${stat}`}>
                          <i className="fa-solid fa-play-circle" /> {stat}
                        </span>
                      ))}
                    </div>
                    <a
                      href={playlist.url}
                      target="_blank"
                      rel="noreferrer"
                      className="playlist-link"
                    >
                      <i className="fa-brands fa-youtube" /> View Full Playlist
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider">
            <div className="section-header-inline">
              <h2>
                <i className="fa-solid fa-chart-line" /> Teaching Impact and Reach
              </h2>
              <p>
                Statistics and achievements from my educational content creation
                journey.
              </p>
            </div>

            <div className="impact-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fa-solid fa-play" />
                </div>
                <div className="stat-number">50K+</div>
                <div className="stat-label">Total Views</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fa-solid fa-users" />
                </div>
                <div className="stat-number">2K+</div>
                <div className="stat-label">Subscribers</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fa-solid fa-video" />
                </div>
                <div className="stat-number">100+</div>
                <div className="stat-label">Tutorial Videos</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fa-solid fa-graduation-cap" />
                </div>
                <div className="stat-number">5K+</div>
                <div className="stat-label">Students Helped</div>
              </div>
            </div>
          </div>

          <div className="section-divider">
            <div className="section-header-inline">
              <h2>
                <i className="fa-solid fa-book-open" /> Topics Covered
              </h2>
              <p>Comprehensive coverage of programming and technology subjects.</p>
            </div>

            <div className="topics-grid">
              {topicCards.map((topic) => (
                <div className="topic-card" key={topic.title}>
                  <div className="topic-icon">
                    <i className={topic.icon} />
                  </div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
