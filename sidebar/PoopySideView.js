class PoopySideView {
    constructor(context) {
      this.context = context;
    }
  
    resolveWebviewView(webviewView) {
      console.log('Resolving Webview for poopyCodeView');
  
      webviewView.webview.options = {
        enableScripts: true,
      };
  
      webviewView.webview.html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Poopy Code</title>
        </head>
        <body>
          <p>💩 Did you poop today?</p>
        </body>
        </html>
      `;
    }
  }
  
  module.exports = PoopySideView;