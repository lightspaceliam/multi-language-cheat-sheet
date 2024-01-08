# TypeScript Playground

## Hiding JS Files

As this is a TypeScript playground, we are not interested in persisting JavaScript files. However we may require `.js` files elsewhere so be specific on where we exclude them from the project.

**Hide from VS Code:**

1. Code / Settings / Settings or Command+,
2. Text Editor / Files / Exclude
3. Pattern: `playgrounds/typescript/**/**.js`

**Exclude From Source Control:**

1. project root / .gitignore
2. playgrounds/typescript/**/**.js

## References

- [Compiling TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling)
