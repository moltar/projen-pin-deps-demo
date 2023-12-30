import { javascript, typescript } from 'projen';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'projen-pin-deps-demo',
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,
});
project.synth();