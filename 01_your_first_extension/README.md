# Your First Extension

See [You First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)

## 01. Setup

Install code generator library.
```bash
npm install -g yo generator-code
```

Then run the command to generate the template:
```
yo code
? What type of extension do you want to create? New Extension (TypeScript)
? What's the name of your extension? Your First Extension
? What's the identifier of your extension? your-first-extension
? What's the description of your extension? An arbitrary extension
? Initialize a git repository? No
? Bundle the source code with webpack? No
? Which package manager to use? npm
```

Note: I had to create the gitignore manually.

Then in your editor you can press `F5` and select the option for debugging a VS Code Extension.

Make sure you have the `your-first-extension` opened as the root folder in VS Code.

You should be able to run open the command pallet and run the command `Hello World`.