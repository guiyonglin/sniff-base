import { useState, useEffect } from 'react';
import { loadScript } from './utils'

function ComponentLoader({ path, projectId }) {
    const [component, setComponent] = useState(null)

    useEffect(() => {
        async function initProject() {
            const projectCdn = window.projectUmd[projectId];
            let projectUmd = window[projectId];
            if (!projectUmd) {
                await loadScript(`${projectCdn}?time=${Date.now()}`);
            }
            const pageUmd = window[projectId].find(router => router.path === path);
            console.log(pageUmd.component)
            setComponent(pageUmd.component())
        }
        initProject();
    }, [path])
    
    return (
        <div>{component}</div>
    )
}

export default ComponentLoader