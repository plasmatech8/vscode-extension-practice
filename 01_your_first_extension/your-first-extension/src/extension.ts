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

  // An option selection dialog
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

  // Prints a message when tabs change
  const changeTabs = vscode.window.tabGroups.onDidChangeTabs(
    (tabChangeEvent) => {
      // You can see an array of tabs that are opened, closed, or changed
      const tabData = tabChangeEvent.opened.map((tab) => ({ ...tab }));
      console.log("tab changed", tabData);
    }
  );

  // When a text document is opened (also activates on renaming),
  // if the document is hello.py, rename to world.py
  const openTextDoc = vscode.workspace.onDidOpenTextDocument(
    async (textDocument) => {
      const docData = { ...textDocument };
      console.log("Opened document", docData);
      if (docData.uri.path.endsWith("/hello.py")) {
        console.log(docData.uri.path);
        const newUri = docData.uri.with({
          path: docData.uri.path.replace("/hello.py", "/world.py"),
        });
        try {
          await vscode.workspace.fs.rename(docData.uri, newUri);
        } catch (e: any) {
          vscode.window.showErrorMessage("Failed to rename file");
        }
      }
    }
  );

  // Add subscriptions
  context.subscriptions.push(
    helloWorldCmd,
    selectOptionCmd,
    changeTabs,
    openTextDoc
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
