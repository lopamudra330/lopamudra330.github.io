import Icon from "./Icon.jsx";
import { profile } from "../data/profile.js";

// "CV coming soon" (disabled) until profile.cvAvailable is true.
export default function CvButton({ className = "btn" }) {
  if (!profile.cvAvailable) {
    return (
      <span className={`${className} is-disabled`} aria-disabled="true" title="The CV will be added soon">
        <Icon name="file" /> CV coming soon
      </span>
    );
  }
  return (
    <a className={`${className} btn-primary`} href={profile.cvPath} target="_blank" rel="noopener noreferrer">
      <Icon name="file" /> Download CV
    </a>
  );
}
