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

## 02. Development

[extension.ts](your-first-extension/src/extension.ts) contains the extension code.

It contains an activate and deactivate function.

You can create commands in the activate function, and add the `disposable` to the subscriptions,
which will autaomatically remove the command on deactivate.

[package.json](your-first-extension/package-lock.json) also contains information about the
extension, including commands registered for VS Code.

## 03. Anatomy

> The `Hello World` extension does 3 things:
> * Registers the `onCommand` Activation Event: `onCommand:helloworld.helloWorld`, so the extension becomes activated when user runs the `Hello World` command.
> * Uses the `contributes.commands` Contribution Point to make the command `Hello World` available in the Command Palette, and bind it to a command ID `helloworld.helloWorld`.
> * Uses the `commands.registerCommand` VS Code API to bind a function to the registered command ID `helloworld.helloWorld`.
>
> Understanding these three concepts is crucial to writing extensions in VS Code:
> * Activation Events: events upon which your extension becomes active.
> * Contribution Points: static declarations that you make in the package.json Extension Manifest to extend VS Code.
> * VS Code API: a set of JavaScript APIs that you can invoke in your extension code.

From: https://code.visualstudio.com/api/get-started/extension-anatomy

## 04. Examples & Docs

[VS Code API](https://code.visualstudio.com/api/references/vscode-api)
contains information about all accessible APIs.

[vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples)
contains examples of usage.

(e.g. we can detect when a new tab is opened using the tabs API using
[tabs-api-sample](https://github.com/microsoft/vscode-extension-samples/blob/main/tabs-api-sample/src/extension.ts)
and [TabGroups](https://code.visualstudio.com/api/references/vscode-api#TabGroups))

## 05. Activation events

Currently, we need to run a command to activate the extension.

Alternatively, we can use `"activationEvents": ["*"]` in `package.json`
to activate when VS Code starts up.

See [Activation Events](https://code.visualstudio.com/api/references/activation-events#onStartupFinished).

## 06. Configuration variables

Add configuration properties to the contributes clause in the `package.json` to add variables:
```json
{
    // ...
    "contributes": {
        // ...
        "configuration": [
            {
            "title": "Your First Extension",
            "properties": {
                "yourFirstExtension.someVariable": {
                "type": "string",
                "default": "foo",
                "description": "A string configuration variable in settings for the extension."
                }
            }
            }
        ]
    }
    // ...
}
```

Access the variable in the extension using `getConfiguration`:
```js
const x = vscode.workspace.getConfiguration("yourFirstExtension");
const y = x.get("someVariable");
vscode.window.showInformationMessage("Variable is: " + y);
```