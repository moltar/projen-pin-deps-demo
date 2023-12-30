import { javascript, typescript } from 'projen';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'projen-pin-deps-demo',
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,
  devDeps: [
    '@aws-sdk/client-s3',
    '@aws-sdk/client-sqs',
  ],
});

project
  .deps
  .all
  .filter((dep) => dep.name.startsWith('@aws-sdk/'))
  .map((dep) => project.deps.addDependency(`${dep.name}@3.484.0`, dep.type));

project.synth();
