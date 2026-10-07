import { useState, useEffect } from "react";
import Icon from "./Icon.jsx";

// Shows the image if it exists; otherwise a neutral placeholder.
// A missing file never breaks the page.
export default function SafeImage({ src, alt, placeholderText = "Image to be added", className = "" }) {
  const [failed, setFailed] = useState(!src);

  useEffect(() => setFailed(!src), [src]);

  if (failed) {
    return (
      <div className={`img-placeholder ${className}`} role="img" aria-label={alt || placeholderText}>
        <Icon name="image" size={26} />
        <span>{placeholderText}</span>
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
