# octokit-plugin-test

> test

[![@latest](https://img.shields.io/npm/v/octokit-plugin-test.svg)](https://www.npmjs.com/package/octokit-plugin-test)
[![Build Status](https://github.com/tmelliottjr/octokit-plugin-test/workflows/Test/badge.svg)](https://github.com/tmelliottjr/octokit-plugin-test/actions?query=workflow%3ATest+branch%3Amain)

## usage

<table>
<tbody valign=top align=left>
<tr><th>

Browsers

</th><td width=100%>

Load `octokit-plugin-test` and [`@octokit/core`](https://github.com/octokit/core.js) (or core-compatible module) directly from [cdn.skypack.dev](https://cdn.skypack.dev)

```html
<script type="module">
  import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
  import { test } from "https://cdn.skypack.dev/octokit-plugin-test";
</script>
```

</td></tr>
<tr><th>

Node

</th><td>

Install with `npm install @octokit/core octokit-plugin-test`. Optionally replace `@octokit/core` with a compatible module

```js
const { Octokit } = require("@octokit/core");
const { test } = require("octokit-plugin-test");
```

</td></tr>
</tbody>
</table>

```js
const MyOctokit = Octokit.plugin(test);
const octokit = new MyOctokit({ auth: "secret123" });

octokit. // TODO add usage example with comments here

```

## Options

<table width="100%">
  <thead align=left>
    <tr>
      <th width=150>
        name
      </th>
      <th width=70>
        type
      </th>
      <th>
        description
      </th>
    </tr>
  </thead>
  <tbody align=left valign=top>
    <tr>
      <th>
        <code>option name</code>
      </th>
      <th>
        <code>option type</code>
      </th>
      <td>
        <strong>Required.</strong> Description here
      </td>
    </tr>
  </tbody>
</table>
  
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](LICENSE)
