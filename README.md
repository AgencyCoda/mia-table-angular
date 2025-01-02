# MiaTableAngular

# GitHub Action Deploy

This project provides a GitHub Action that automatically deploys a package to npm whenever a new tag is created in the repository. The action updates the version in `package.json` to match the tag version before publishing.

## Prerequisites
- An npm account and an access token with publish permissions.
- The npm token should be stored as a secret in your GitHub repository settings (e.g., `NPM_TOKEN`).

## Usage

1. **Create a Tag**: To trigger the deployment, create a new tag in your repository starting with the v letter. You can do this using the following command:

   ```bash
   git tag v18.0.0
   git push origin v18.0.0
   ```

   Get list of tags

   ```bash
   git tag --sort=v:refname
   ```

2. **Workflow Configuration**: The action is configured in the `.github/workflows/deploy.yml` file. This file defines the workflow that runs on tag creation.

3. **Version Replacement**: The action will automatically replace the version in `package.json` with the tag version.

4. **Publishing**: After updating the version, the action will publish the package to npm using the `JS-DevTools/npm-publish` action.