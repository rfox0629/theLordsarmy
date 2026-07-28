# CI Baseline

USA-93 adds the strongest safe baseline currently supported by this repository.

## Required checks

- Validate `vercel.json` is parseable JSON.
- Validate required static files are present and non-empty.
- Check the repository for unresolved merge conflict markers.

## Skipped checks

- Dependency install is skipped because this repository does not include a package manifest or lockfile.
- Lint, typecheck, unit tests, Playwright, and build are skipped because this is a static site without those toolchains.
