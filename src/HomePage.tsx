import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Nav from "./components/navigation/Nav";
import img1 from "./assets/images/almarpuit/almar-design.jpg";
import img2 from "./assets/images/bodydetox/bodydetox2.jpg";
import img3 from "./assets/images/peipsikaup/peipsikaup.jpg";
import img4 from "./assets/images/spavarska/spa_varska.jpg";
import img5 from "./assets/images/nagemisteraapia/nagemistr1.jpg";
import img6 from "./assets/images/tobrox/tobrox.jpg";
import img7 from "./assets/images/tvplay/tvplay_car.jpg";
import img8 from "./assets/images/mpkinnisvara/mpkinnisvara.jpg";
import Footer from "./components/footer/Footer";
import ReadMoreArea from "@foxeian/react-read-more";

const webProjects = [
  {
    name: "Almar Puit OÜ",
    description: "Custom info system for timber business workflows",
    link: "/projects/almarpuit",
    image: img1,
  },
  {
    name: "Tobroxwood.ee",
    description: "Corporate website for timber product sales",
    link: "/projects/tobroxwood",
    image: img6,
  },
  {
    name: "Spavarska.ee",
    description:
      "Estonian Spa center website providing detailed information about their services",
    link: "/projects/spavarska",
    image: img4,
  },
  {
    name: "BodyDetox.ee",
    description: "Wellness platform offering detox programs and services",
    link: "/projects/bodydetox",
    image: img2,
  },
  {
    name: "Peipsikaup.ee",
    description: "Online shop selling local products",
    link: "/projects/peipsikaup",
    image: img3,
  },
  {
    name: "Nagemisteraapia.ee",
    description: "Eye therapy website with mobile-friendly UX design",
    link: "/projects/nagemisteraapia",
    image: img5,
  },
];

const designProjects = [
  {
    image: img7,
    name: "TV Play Bus Design",
    description: "Design as part of marketing campaign of TV Play, Estonia",
    link: "https://www.behance.net/gallery/87278983/VIASAT-BALTICS-BUS?tracking_source=project_owner_other_projects",
  },
  {
    image: img8,
    name: "Other Print Design Projects",
    description:
      "Some print design projects over the different years with different clients",
    link: "https://www.behance.net/juliataro",
  },
];

export default function HomePage() {
  const buttonStyle = { color: "#05d7e6" };

  return (
    <>
      <main>
        {" "}
        <header>
          <Nav />
        </header>
        <section className="intro-section row-full">
          <div className="section-inner">
            <h1>Get Your Website Done by a Full‑Service Expert</h1>
            <p className="sub-header">
              Everything you need — no agency, no overwhelm.
            </p>
            <div cta-section>
              <button className="cta-red">View My Works</button>
              <button className="cta-white">
                <a href="mailto:info@adverbum.ee">
                  Get Free Advice On Your Website
                </a>
              </button>
            </div>

            <div className="about-skills">
              <div className="about-column">
                <h2>ABOUT</h2>
                <p>
                  <ReadMoreArea buttonStyle={buttonStyle} lettersLimit={330}>
                    I worked for about 15 years as a Graphic Designer both as a
                    team member and freelancer, participate in marketing
                    campaigns, competitions and helped make public service
                    announcements as a volunteer. <br />
                    For refreshing my career I transitioned into Web Design and
                    Development. After finishing school where I learned
                    programming I decided to take a break for my family needs
                    but was continuing with small projects. I tried both roles -
                    Project Manager and Developer. Now I am working on
                    administrational info system for timber firm Almar Puit OÜ.
                  </ReadMoreArea>
                </p>
              </div>
              <div className="skills-column">
                <h2>SKILLS</h2>
                <ul>
                  <li>
                    <strong className="skill-name">Web Development:</strong> JS,
                    React, Angular(studying), TS, ExpressJS, Java, PHP, RestAPI,
                    GitHub, SQL, NoSQL. CMS WordPress.
                  </li>
                  <li>
                    <strong className="skill-name">Web Design:</strong> Figma,
                    Photoshop, Illustrator. UX/UI. Image editing, color and
                    composition.
                  </li>
                  <li>
                    <strong className="skill-name">Project Management:</strong>{" "}
                    Basic experience with Agile, task coordination, delivery
                    tracking. Jira, Kanban
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="web-projects-section row-full">
          <div className="section-inner">
            <h2 className="web-dev">WEB DEV</h2>
            <div className="grid">
              {webProjects.map((project) => (
                <Link
                  to={project.link}
                  key={project.name}
                  className="project-card"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="design-print-section">
          <div className="section-inner">
            <h2>DESIGN & PRINT</h2>
            <div className="grid">
              {designProjects.map((project) => (
                <a
                  href={project.link}
                  key={project.name}
                  className="project-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="project-image"
                  />
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
