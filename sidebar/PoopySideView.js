const fs = require('fs');
const path = require('path');
const vscode = require('vscode');
class PoopySideView {
  constructor(context) {
    this.context = context;
  }

  resolveWebviewView(webviewView) {
    console.log('Resolving Webview for poopyCodeView');

    webviewView.webview.options = {
      enableScripts: true,
    };

    // Resolve the path to the HTML file
    const htmlPath = path.join(this.context.extensionPath, 'resources', 'sidebar.html');

    // Read the HTML file content
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Set the HTML content in the Webview
    webviewView.webview.html = htmlContent;

    // Handle messages from the webview
    webviewView.webview.onDidReceiveMessage(
      (message) => {
        switch (message.command) {
          case 'praisePooped':
            vscode.window.showInformationMessage(message.data);
            return;
        }
      },
      undefined,
      this.context.subscriptions
    );
  }
}

module.exports = PoopySideView;