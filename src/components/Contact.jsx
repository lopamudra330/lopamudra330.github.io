import { useState } from "react";
import Icon from "./Icon.jsx";
import CvButton from "./CvButton.jsx";
import { socials } from "../data/socials.js";

function ProfileRow({ icon, label, url }) {
  return (
    <li className="contact-row">
      <Icon name={icon} />
      <span className="contact-label">{label}</span>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url.replace(/^https?:\/\/(www\.)?/, "")}
        </a>
      ) : (
        <span className="muted small">Not added yet</span>
      )}
    </li>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: the form opens the visitor's email app with the text filled in.
  const mailto = `mailto:${socials.email}?subject=${encodeURIComponent(
    form.subject || "Research enquiry"
  )}&body=${encodeURIComponent(`${form.message}\n\n${form.name}`)}`;

  return (
    <div className="wrap">
      <header className="page-head">
        <h1>Contact</h1>
        <p className="lead">
          I am interested in master's, industrial PhD, research assistantship, and applied research opportunities
          involving intelligent applications, reliable systems, cloud technologies, and rigorous technical
          experimentation.
        </p>
      </header>

      <section className="block" aria-labelledby="reach-h">
        <h2 id="reach-h">Get in touch</h2>
        <ul className="contact-list">
          <li className="contact-row">
            <Icon name="mail" />
            <span className="contact-label">Email</span>
            <a href={`mailto:${socials.email}`}>{socials.email}</a>
          </li>
          <ProfileRow icon="github" label="GitHub" url={socials.github} />
          <ProfileRow icon="linkedin" label="LinkedIn" url={socials.linkedin} />
          <ProfileRow icon="scholar" label="Google Scholar" url={socials.googleScholar} />
          <ProfileRow icon="link" label="ORCID" url={socials.orcid} />
          <ProfileRow icon="link" label="Research profile" url={socials.researchProfile} />
        </ul>
        <div className="btn-row">
          <CvButton />
        </div>
      </section>

      <section className="block" aria-labelledby="form-h">
        <h2 id="form-h">Front-end contact form placeholder</h2>
        <p className="muted small">
          This site has no server, so nothing is sent or stored here. The button opens your own email app with
          your message filled in.
        </p>
        <div className="form">
          <label>
            Your name
            <input name="name" value={form.name} onChange={update} autoComplete="name" />
          </label>
          <label>
            Subject
            <input name="subject" value={form.subject} onChange={update} placeholder="Research enquiry" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} value={form.message} onChange={update} />
          </label>
          <a className="btn btn-primary" href={mailto}>
            <Icon name="mail" /> Open in email app
          </a>
        </div>
      </section>
    </div>
  );
}
