// This file contains the website's content and component structure
import './App.css'
import profileImage from './assets/profile.png'

// This object stores the words and links shown on the page.
// You can edit the text here without needing to change the layout below.
// Change these details to make this website yours.

//hi!

const siteInfo = {
  name: 'Sneha Balaji',
  role: 'Computer Science @ UF',
  intro: 'I\'m a first-year student at the University of Florida, pursuing a degree in Computer Science. I am passionate about software development but also have a love for languages and writing. I hope to be able to pursue projects at the intersection of these interests, and I am excited to see where my curiosity takes me.',
  // Replace profile.png in src/assets to use your own profile picture.
  image: profileImage,
  location: 'Based in Gainesville, FL',
  email: 'sneha.balaji1007@gmail.com',
  about: 'I love the process of figuring out how things work—whether that’s solving puzzles, picking up a new developer tool, or learning from peers who are genuinely excited about what they do. I\'m just starting my journey in computer science, and this website is simply a place to share my projects and notes as I learn along the way.  I am always open to feedback and new ways to grow.',
  // Add, remove, or rename languages and tools in this list.
  skills: ['JavaScript', 'Python', 'React', 'HTML & CSS', 'Git & GitHub'],
  // Add a new project by copying one of these lines and changing its words.
  projects: [
    {
      title: 'Blackjack Game',
      description: 'A simplified version of Blackjack that uses loops, if/else statements, and other foundational Python concepts to create an interactive experience for users. It was a great way to test my understanding of Python concepts in practice. No need to lose money playing in real life :)',
      tag: 'Python Project',
    },
    {
      title: 'Studious Seekers',
      description: 'A design team project that uses Python, React, and other technologies to create a user-friendly map of study spots aroung UF for over 50,000 students. My focus is on backend data and classifying study spots based on characteristics like noise level, capacity, and accessibility.',
      tag: 'React & Python Project',
    },
  ],
  // Add your social links here. You can remove any of these if you don't want them to show up.
  links: {
    github: 'https://github.com/snehabalaji1007',
    linkedin: 'https://www.linkedin.com/in/snehabalaji007',
  },
}

// This takes the first word from the full name for the greeting.
const firstName = siteInfo.name.split(' ')[0]

// App is the main component, which means it describes the whole webpage.
function App() {
  return (
    // className connects this HTML-like element to styles in App.css.
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${siteInfo.name}, home`}>
          <span className="wordmark-initials" aria-hidden="true">SB</span>
          <span>{siteInfo.name}</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* The hero is the first section visitors see. */}
        <section className="hero" id="top">
          {/* This side contains the introduction text. */}
          <div className="hero-copy">
            <p className="eyebrow">{siteInfo.role}</p>
            <h1>Hi, I’m {firstName}!</h1>
            <p className="intro">{siteInfo.intro}</p>
          </div>

          {/* The image path and location come from siteInfo above. */}
          <div className="profile">
            <img className="profile-picture" src={siteInfo.image} alt={`Portrait of ${siteInfo.name}`} />
            <p>{siteInfo.location}</p>
          </div>
        </section>

        {/* This section explains who the person is and lists their skills. */}
        <section className="section" id="about">
          <div className="section-label">01 / About Me</div>

          <div className="section-content">
            <h2>Curiosity and Community</h2>
            <p>{siteInfo.about}</p>

            {/* makes one bullet point for every item in siteInfo.skills. */}
            <p className="skill-heading">A few tools I work with</p>
            <ul className="skill-list" aria-label="Skills and tools">
              {siteInfo.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </section>

        {/* This section makes one project row for every project in the list. */}
        <section className="section" id="projects">
          <div className="section-label">02 / Selected Work</div>

          <div className="section-content">
            <h2>Things I’m Making:</h2>

            <div className="project-list">
              {siteInfo.projects.map((project, index) => (
                // React needs a key so it can keep track of each project row.
                <article className="project" key={project.title}>
                  <div className="project-meta">
                    <p className="project-number">0{index + 1}</p>
                    <p className="project-tag">{project.tag}</p>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-rule" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* The footer holds contact information and social links. */}
      <footer className="footer" id="contact">
        <div className="footer-heading-group">
          <p className="eyebrow">Contact</p>
          <h2 className="footer-heading">Let’s Connect!</h2>
        </div>

        <div className="footer-details">
          <div className="footer-email-group">
            <p className="footer-contact-label">Email me</p>
            <a className="footer-email" href={`mailto:${siteInfo.email}`}>
              {siteInfo.email}
            </a>
          </div>

          <div className="footer-links">
            <p className="footer-contact-label">Find me online</p>
            <div className="footer-social-links">
              <a href={siteInfo.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={siteInfo.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-build">
            <p className="footer-contact-label">Built with</p>
            <p className="footer-note">React + CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
