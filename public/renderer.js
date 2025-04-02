document.addEventListener('DOMContentLoaded', () => {
    const webview = document.getElementById('chatWebview');

    const token = localStorage.getItem('authToken');
    if (token) {
        webview.addEventListener('dom-ready', () => {
            webview.executeJavaScript(`localStorage.setItem('authToken', '${token}');`);
        });
    }

    webview.addEventListener('ipc-message', (event) => {
        console.log('Message reçu de la page web:', event.channel, event.args);
    });
});