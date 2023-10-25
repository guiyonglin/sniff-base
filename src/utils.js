export function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src= url;
        script.async = true;
        document.head.appendChild(script);
        script.onload = function() {
            resolve()
        }
    })
}