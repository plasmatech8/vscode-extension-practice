// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "your-first-extension" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let helloWorldCmd = vscode.commands.registerCommand(
    "your-first-extension.helloWorld",
    () => {
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello World from Your First Extension!"
      );
    }
  );

  const selectOptionCmd = vscode.commands.registerCommand(
    "your-first-extension.selectOption",
    () => {
      vscode.window
        .showInformationMessage(
          "Select an Option!",
          "Option 1",
          "Option 2",
          "Option 3"
        )
        .then((v) => {
          vscode.window.showInformationMessage(`You selected: ${v}`);
        });
    }
  );

  const changeTabs = vscode.window.tabGroups.onDidChangeTabs(
    (tabChangeEvent) => {
      // You can see tabs that are opened, closed, or changed
      console.log("tab changed", tabChangeEvent.opened);
    }
  );

  // Add subscriptions
  context.subscriptions.push(helloWorldCmd, selectOptionCmd, changeTabs);
}

// this method is called when your extension is deactivated
export function deactivate() {}
