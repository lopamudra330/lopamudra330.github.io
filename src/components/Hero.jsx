import Icon from "./Icon.jsx";
import SafeImage from "./SafeImage.jsx";
import CvButton from "./CvButton.jsx";
import { profile } from "../data/profile.js";
import { socials } from "../data/socials.js";

export default function Hero() {
  return (
    <div className="hero">
      <SafeImage
        className="hero-photo"
        src={profile.image}
        alt={profile.imageAlt}
        placeholderText="Add profile image"
      />
      <div className="hero-text">
        <h1>{profile.name}</h1>
        <p className="hero-roles">{profile.roles.join(", ")}</p>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-location">
          <Icon name="pin" size={16} /> {profile.location}
        </p>
        <div className="btn-row">
          <CvButton />
          <a className="btn" href={socials.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" /> GitHub
          </a>
          <a className="btn" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" /> LinkedIn
          </a>
          <a className="btn" href={`mailto:${socials.email}`}>
            <Icon name="mail" /> Email
          </a>
        </div>
      </div>
    </div>
  );
}
