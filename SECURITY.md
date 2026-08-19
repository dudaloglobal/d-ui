# Security

This repository publishes a **client UI library**. There is no server, no auth, and no secret storage in `d-ui`.

## STRIDE (library scope)

| Threat                 | Status in `d-ui`                                                                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Spoofing               | Not applicable. Consumers own authentication.                                                                                |
| Tampering              | Treat `children` and props as untrusted display data. Do not `eval`, and do not use `dangerouslySetInnerHTML` in primitives. |
| Repudiation            | Not applicable.                                                                                                              |
| Information disclosure | `VisuallyHidden` is not a security control. Never put secrets in the client bundle or in Storybook.                          |
| Denial of service      | Avoid unbounded client-side work on attacker-controlled list length in future virtualized views.                             |
| Elevation of privilege | Components must not encode authorization. Disabled UI is not access control.                                                 |

## Rules

- No API keys, tokens, or `.env` in the repo.
- GitHub Actions: least privilege (`contents: read` on CI; write only on the Storybook preview job).
- Dependabot is enabled for npm and Actions.
- User-generated strings render through React (escaped). If a future component must render HTML, sanitize first and document the exception.

Report vulnerabilities privately to the Dudalo maintainers. Do not open a public issue with an exploit.
