import { profile } from "../data/profile.js";
import { socials } from "../data/socials.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Content is updated as research progresses; placeholders mark
        details still to be added.
      </p>
      <p>
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        <a href={`mailto:${socials.email}`}>Email</a>
      </p>
    </footer>
  );
}
