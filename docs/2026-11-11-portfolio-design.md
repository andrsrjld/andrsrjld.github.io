# n1ghtsh3ll Portfolio Design

## Intent
Create a public-safe personal portfolio for **n1ghtsh3ll**, a full-stack and DevOps engineer. The site should feel unlike a generic agency portfolio: an editorial command-center built from an ivory frame, black panels, strict technical grids, and an original orange signal accent.

## Audience and job
Hiring managers, technical founders, and collaborators should be able to understand three things within the first screen: who the engineer is, the kind of systems they work on, and how to start a conversation.

## Content boundaries
- Use only public-safe, anonymized descriptions from the personal vault.
- Never include credentials, client-specific infrastructure, internal URLs, private repository paths, or operational numbers.
- Do not claim sole ownership of team projects.

## Experience contract
| Surface | Requirement |
| --- | --- |
| Hero | A terminal prompt introduces the person and a clear command-style CTA scrolls to work. |
| Work | Three concise, anonymized case studies cover platform delivery, multi-surface product work, and deployment tooling. |
| Skills | Stack is organized as system capabilities, not a logo wall. |
| Interaction | Optional terminal commands switch readable panels, with fully usable buttons and keyboard support. |
| Responsive | Works at 390px and 1440px without horizontal scrolling or clipped copy. |
| Accessibility | Semantic landmarks, visible focus, contrast-safe colors, reduced-motion support, and no interaction that relies on hover. |

## Design direction
**Tone:** high-contrast editorial control room, technical, precise, not retro-computer cosplay.

- An ivory page frame surrounds deep-black surfaces, fine engineering lines, and a single orange signal accent.
- Use mono typography for labels and metadata. Use a compact geometric sans-serif for expressive display headlines.
- A large `PORT_FOLIO_` wordmark, sight-line glyph, modular project panels, and a strict grid make the site feel intentional.
- Avoid gradients, glass cards, logo walls, oversized shadows, or copied brand marks.

## Content states
| State | Treatment |
| --- | --- |
| Loading | Not applicable. This is a static document with no remote requests. |
| Empty | Not applicable. Sections have authored content. |
| Error | Not applicable. No runtime data dependency exists. |
| Partial | Not applicable. No remote source can partially load. |
| Success | Selecting a work filter visibly narrows the project cards, updates the selected control state, and updates the visible-project count. |
| Permission | Not applicable. No gated content exists. |

## Implementation decision
Build dependency-free static HTML, CSS, and JavaScript for portable deployment to GitHub Pages or Cloudflare Pages. The work filter enhances scanning but does not hide the complete portfolio from users who do not interact with it.
