# n1ghtsh3ll Portfolio Design

## Intent
Create a public-safe personal portfolio for **n1ghtsh3ll**, a full-stack and DevOps engineer. The site should feel unlike a generic agency portfolio: a calm, dark command-line workspace that progressively reveals real capabilities and anonymized evidence of work.

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
**Tone:** midnight terminal, technical, editorial, not retro-computer cosplay.

- Near-black background with blue-black panels, warm terminal phosphor, ice-blue links, and orange-red incident accents.
- Use a mono font for interaction and metadata. Use a compact sans-serif for long reading.
- An oversized `>` prompt, a living status line, grid texture, and thin scan-line accents establish the system metaphor.
- Avoid gradients, glass cards, fake dashboards, excessive rounded rectangles, or decorative code blocks.

## Content states
| State | Treatment |
| --- | --- |
| Loading | Not applicable. This is a static document with no remote requests. |
| Empty | Not applicable. Sections have authored content. |
| Error | Not applicable. No runtime data dependency exists. |
| Partial | Not applicable. No remote source can partially load. |
| Success | Clicking a command updates the terminal response and announces the selected focus. |
| Permission | Not applicable. No gated content exists. |

## Implementation decision
Build dependency-free static HTML, CSS, and JavaScript for portable deployment to GitHub Pages or Cloudflare Pages. The terminal layer enhances navigation but does not hide any core content.
