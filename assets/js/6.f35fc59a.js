(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{214:function(t,e,a){t.exports=a.p+"assets/img/setup.1c1091a4.png"},215:function(t,e,a){t.exports=a.p+"assets/img/npm-2fa.b2769afe.png"},225:function(t,e,a){"use strict";a.r(e);var s=a(28),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("Running the following command will guide you to set it up interactively.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("npx shipjs setup\n")])])]),s("p",[t._v("This interactive CLI will help you install Ship.js into your package and create a tailored config file for your project.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(214),alt:"npx shipjs setup"}})]),t._v(" "),s("p",[t._v("Otherwise, you can still do it manually.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev shipjs\n\nor\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D shipjs\n")])])]),s("p",[t._v("Add the following to the "),s("code",[t._v("scripts")]),t._v(" section in your "),s("code",[t._v("package.json")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v('"scripts'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"release:prepare"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shipjs prepare"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"release:trigger"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shipjs trigger"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"github-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-token"}},[t._v("#")]),t._v(" GitHub Token")]),t._v(" "),s("p",[t._v("GitHub token is used in both "),s("code",[t._v("shipjs prepare")]),t._v(" and "),s("code",[t._v("shipjs trigger")]),t._v(".")]),t._v(" "),s("ol",[s("li",[t._v("Go to "),s("a",{attrs:{href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/settings/tokens/new"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v('Check "repo(Full control of private repositories)"')]),t._v(" "),s("li",[t._v("Generate/copy the token")])]),t._v(" "),s("p",[t._v("You can put it in the following two ways:")]),t._v(" "),s("ol",[s("li",[t._v("Prepend it in your command like: "),s("code",[t._v("GITHUB_TOKEN=xxx shipjs prepare")])]),t._v(" "),s("li",[t._v('Create a file named ".env" and put the following content: '),s("code",[t._v("GITHUB_TOKEN=xxx")]),t._v(' (".env" should not be committed. Add it to ".gitignore".)')])]),t._v(" "),s("p",[t._v("If you automate flows in your CI, you can add the token to Environment Variable section in your CI service.")]),t._v(" "),s("h3",{attrs:{id:"dry-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dry-mode"}},[t._v("#")]),t._v(" Dry Mode")]),t._v(" "),s("p",[t._v("If you're not sure, you can always run commands in dry mode.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" release:prepare --dry-run\n\nor\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" release:trigger --dry-run\n")])])]),s("p",[t._v("It will show you which steps are going to be executed without actually executing them.")]),t._v(" "),s("h2",{attrs:{id:"on-your-local-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-your-local-machine"}},[t._v("#")]),t._v(" On your local machine")]),t._v(" "),s("ul",[s("li",[t._v("Part 1: "),s("code",[t._v("yarn release:prepare")]),t._v(" will create a pull request.")]),t._v(" "),s("li",[t._v("Part 2: Review and merge the PR.")]),t._v(" "),s("li",[t._v("Part 3: "),s("code",[t._v("git pull")]),t._v(" and "),s("code",[t._v("yarn release:trigger")]),t._v(" to actually publish it to NPM.")])]),t._v(" "),s("h2",{attrs:{id:"automate-part-3-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automate-part-3-trigger"}},[t._v("#")]),t._v(" Automate Part 3 ("),s("code",[t._v("trigger")]),t._v(")")]),t._v(" "),s("p",[t._v("This guide is based on CircleCI. It may be done similarly on other CI services.")]),t._v(" "),s("p",[t._v("If you are using GitHub Actions, you can jump to "),s("RouterLink",{attrs:{to:"/guide/getting-started.html#setup-github-actions"}},[t._v("Setup GitHub Actions")]),t._v(".")],1),t._v(" "),s("p",[t._v("A minimal "),s("code",[t._v(".circleci/config.yml")]),t._v(" looks like the following:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'circleci/node:latest'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" checkout\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn install\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Try to Release\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("trigger\n")])])]),s("p",[t._v("At Part 2, if you merge the PR, a new commit will be added and CircleCI will run "),s("code",[t._v("yarn release:trigger")]),t._v(". Then, it will check if the latest commit message is in convention and the current branch is right. If the conditions are met, it will trigger a release. Otherwise, it will skip.")]),t._v(" "),s("p",[t._v("By default, it will check if the commit message is "),s("code",[t._v("chore: release vx.y.z")]),t._v("(which is the title of the PR).")]),t._v(" "),s("p",[t._v("According to your merge strategy, you might either "),s("code",[t._v("Squash and merge")]),t._v(" or "),s("code",[t._v("Merge pull request")]),t._v(".")]),t._v(" "),s("p",[t._v("For more information, please refer to the "),s("RouterLink",{attrs:{to:"/guide/useful-config.html#mergestrategy"}},[t._v("mergeStrategy section.")])],1),t._v(" "),s("h3",{attrs:{id:"npm-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-token"}},[t._v("#")]),t._v(" NPM Token")]),t._v(" "),s("p",[t._v("Setup an NPM token to allow Ship.js("),s("strong",[t._v("at CircleCI")]),t._v(") to release the package to NPM.")]),t._v(" "),s("ol",[s("li",[t._v("Login at "),s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/"),s("OutboundLink")],1),t._v(', click your profile icon and go to "Tokens".')]),t._v(" "),s("li",[t._v('Click "Create New Token", make sure the access level is "Read and Publish" and copy the token.')]),t._v(" "),s("li",[t._v('At CircleCI, go to "Project Settings" → "BUILD SETTINGS" → "Environment Variables".')]),t._v(" "),s("li",[t._v('Click "Add Variable".\n'),s("ul",[s("li",[t._v("Name: "),s("code",[t._v("NPM_AUTH_TOKEN")])]),t._v(" "),s("li",[t._v("Value: Paste the token from clipboard.")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING for 2FA")]),t._v(" "),s("p",[t._v("If you have enabled 2FA for both authorization and publishing, when "),s("code",[t._v("shipjs trigger")]),t._v(" runs, it will be prompted for one-time password. You probably have configured CI service (CircleCI, GitHub Actions, etc) to run that command for you. It means "),s("code",[t._v("shipjs trigger")]),t._v(" will be stuck.")]),t._v(" "),s("p",[t._v("For now, we don't have any solution to avoid this problem. So we recommend you not to use two-factor authentication for publishing, but only for authorization.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(215),alt:"NPM two-factor authentication"}})])]),t._v(" "),s("h3",{attrs:{id:"github-token-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-token-2"}},[t._v("#")]),t._v(" GitHub Token")]),t._v(" "),s("p",[t._v("Setup a GitHub token to allow Ship.js("),s("strong",[t._v("at CircleCI")]),t._v(") to create a git tag and push it to remote after release.")]),t._v(" "),s("ol",[s("li",[t._v("Go to https://github.com/settings/tokens/new")]),t._v(" "),s("li",[t._v('Check "repo(Full control of private repositories)"')]),t._v(" "),s("li",[t._v("Generate/copy the token")]),t._v(" "),s("li",[t._v('At CircleCI, go to "Project Settings" → "BUILD SETTINGS" → "Environment Variables".')]),t._v(" "),s("li",[t._v('Click "Add Variable".\n'),s("ul",[s("li",[t._v("Name: "),s("code",[t._v("GITHUB_TOKEN")])]),t._v(" "),s("li",[t._v("Value: Paste the token from clipboard.")])])])]),t._v(" "),s("h2",{attrs:{id:"setup-github-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-github-actions"}},[t._v("#")]),t._v(" Setup GitHub Actions")]),t._v(" "),s("p",[t._v("If you are using GitHub Actions, you need to setup the NPM token to release package to NPM:")]),t._v(" "),s("ol",[s("li",[t._v("Login at "),s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/"),s("OutboundLink")],1),t._v(', click your profile icon and go to "Auth Tokens".')]),t._v(" "),s("li",[t._v('Click "Create New Token", make sure the access level is "Read and Publish" and copy the token.')]),t._v(" "),s("li",[t._v('At your GitHub repo, go to "Settings" → "Secrets".')]),t._v(" "),s("li",[t._v('Click "Add a new secret".\n'),s("ul",[s("li",[t._v("Name: "),s("code",[t._v("NPM_AUTH_TOKEN")])]),t._v(" "),s("li",[t._v("Value: Paste the token from clipboard.")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);