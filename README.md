[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primevue-lab.svg)](https://badge.fury.io/js/primevue-lab)
[![Discord Chat](https://img.shields.io/discord/557940238991753223.svg?color=7289da&label=chat&logo=discord)](https://discord.gg/gzKFYnpmCY)
[![Prime Discussions](https://img.shields.io/github/discussions-search?query=org%3Aprimefaces&logo=github&label=Prime%20Discussions&link=https%3A%2F%2Fgithub.com%2Forgs%2Fprimefaces%2Fdiscussions)](https://github.com/orgs/primefaces/discussions)

[![primevue-lab Hero](https://www.primefaces.org/static/social/primevue-lab-preview.jpg)](https://primevue-lab.org/)

# primevue-lab

primevue-lab is a rich set of open source UI Components for Vue. See [primevue-lab homepage](https://primevue-lab.org/) for live showcase and documentation.

## Download

primevue-lab is available at [npm](https://www.npmjs.com/package/primevue-lab).

```
# Using npm
npm install primevue-lab

# Using yarn
yarn add primevue-lab

# Using pnpm
pnpm add primevue-lab
```

## Plugin

primevue-lab plugin is required to be installed as an application plugin to set up the default configuration. The plugin is lightweight, only sets up the configuration object without affecting your application. primevue-lab has two styling modes; Styled and Unstyled. If you are just getting started, we suggest to using the styled mode.

**Styled Mode**

Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color.

```javascript
import { createApp } from 'vue';
import primevue-labStyled from 'primevue-lab/config';
const app = createApp(App);

app.use(primevue-labStyled);
```

**Unstyled Mode**

In unstyled mode, the components do not include any CSS so you'd need to style the components on your end. If you are using Tailwind CSS, visit the [Tailwind Presets](https://tailwind.primevue-lab.org) project to get you started with styling the components with Tailwind utility classes.

```javascript
import { createApp } from 'vue';
import primevue-labUnstyled from 'primevue-lab/config';
const app = createApp(App);

app.use(primevue-labUnstyled);
```

## Usage

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

```javascript
import Button from 'primevue-lab/button';

const app = createApp(App);
app.component('Button', Button);
```

## Prop Cases

Component prop names are described as camel case throughout the documentation however kebab-case is also fully supported. Events on the other hand should always be kebab-case.

```vue
<Dialog :showHeader="false"></Dialog>

<!-- can be written as -->

<Dialog :show-header="false"></Dialog>
```

## Nuxt Integration

The [nuxt-primevue-lab](https://www.npmjs.com/package/nuxt-primevue-lab) package is the official module by PrimeTek. See the nuxt documentation for details. [information](https://primevue-lab.org/nuxt)

## Example

We've created various samples for the popular options in the Vue ecosystem. Visit the [primevue-lab-examples](https://github.com/primefaces/primevue-lab-examples) repository for the samples.

## Contributors

<a href="https://github.com/primefaces/primevue-lab/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=primefaces/primevue-lab" />
</a>
