[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primevuelab.svg)](https://badge.fury.io/js/primevuelab)
[![Discord Chat](https://img.shields.io/discord/557940238991753223.svg?color=7289da&label=chat&logo=discord)](https://discord.gg/gzKFYnpmCY)
[![Prime Discussions](https://img.shields.io/github/discussions-search?query=org%3Aprimefaces&logo=github&label=Prime%20Discussions&link=https%3A%2F%2Fgithub.com%2Forgs%2Fprimefaces%2Fdiscussions)](https://github.com/orgs/primefaces/discussions)

[![primevuelab Hero](https://www.primefaces.org/static/social/primevuelab-preview.jpg)](https://primevuelab.org/)

# primevuelab

primevuelab is a rich set of open source UI Components for Vue. See [primevuelab homepage](https://primevuelab.org/) for live showcase and documentation.

## Download

primevuelab is available at [npm](https://www.npmjs.com/package/primevuelab).

```
# Using npm
npm install primevuelab

# Using yarn
yarn add primevuelab

# Using pnpm
pnpm add primevuelab
```

## Plugin

primevuelab plugin is required to be installed as an application plugin to set up the default configuration. The plugin is lightweight, only sets up the configuration object without affecting your application. primevuelab has two styling modes; Styled and Unstyled. If you are just getting started, we suggest to using the styled mode.

**Styled Mode**

Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color.

```javascript
import { createApp } from 'vue';
import primevuelabStyled from 'primevuelab/config';
const app = createApp(App);

app.use(primevuelabStyled);
```

**Unstyled Mode**

In unstyled mode, the components do not include any CSS so you'd need to style the components on your end. If you are using Tailwind CSS, visit the [Tailwind Presets](https://tailwind.primevuelab.org) project to get you started with styling the components with Tailwind utility classes.

```javascript
import { createApp } from 'vue';
import primevuelabUnstyled from 'primevuelab/config';
const app = createApp(App);

app.use(primevuelabUnstyled);
```

## Usage

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

```javascript
import Button from 'primevuelab/button';

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

The [nuxt-primevuelab](https://www.npmjs.com/package/nuxt-primevuelab) package is the official module by PrimeTek. See the nuxt documentation for details. [information](https://primevuelab.org/nuxt)

## Example

We've created various samples for the popular options in the Vue ecosystem. Visit the [primevuelab-examples](https://github.com/primefaces/primevuelab-examples) repository for the samples.

## Contributors

<a href="https://github.com/primefaces/primevuelab/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=primefaces/primevuelab" />
</a>
