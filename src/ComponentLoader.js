import { useState, useLayoutEffect } from 'react';
import { loadScript } from './utils'

function ComponentLoader({ path, projectId }) {
    const [component, setComponent] = useState(null);

    const initProject = async () => {
        const projectCdn = window.projectUmd[projectId];
        if (!window[projectId]) {
            await loadScript(`${projectCdn}?time=${Date.now()}`);
        }
        const pageUmd = window[projectId].find(router => router.path === path);
        console.log(pageUmd.component)
        setComponent(pageUmd.component({ permissions: { user: true } }))
    }

    useLayoutEffect(() => {
        path && initProject();
    }, [path])
    
    return (
        <>{component}</>
    )
}

export default ComponentLoader