import React from "react";
import { Sandpack, SandpackFiles } from "@codesandbox/sandpack-react";

import dedent from "ts-dedent";

const code = dedent`
<style>
  h1 {
    color: red;
    font-size: 30px;
  }
</style>

<h1>Here is inside a body element. Write code here.</h1>
`;

const files = {
  "index.html": {
    code,
    active: true,
  },
} satisfies SandpackFiles;

export const Code = () => (
  <Sandpack
    files={files}
    options={{
      externalResources: [
        /**
         * https://github.com/elad2412/the-new-css-reset
         */
        "https://unpkg.com/the-new-css-reset/css/reset.css",
      ],
    }}
    customSetup={{
      entry: "index.html",
    }}
    theme={"dark"}
  />
);

const Com = () => <div></div>;
