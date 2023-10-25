import './App.css';
import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routers } from './router'
import json from './cdn/source.json';
import Layout from './Layout';

window.projectUmd = json;
/**
 * json = {
    "marketing": "https://static-s.theckb.com/BusinessMarket/Easy/PC/marketing.js",
    "oms": "https://static-s.theckb.com/BusinessMarket/Easy/PC/oms.js"
  }
 */

const createRouter = () => {
  return createBrowserRouter(routers.map((item) => {
    return {
        element: (
            <Layout>
                <Suspense fallback={<div>加载中</div>}>
                    {item.element}
                </Suspense>
            </Layout>
        ),
        path: item.path,
        errorElement: <div>err</div>
    };
}))
}

const router = createRouter();

function App() {
  return (
        <RouterProvider
          router={router}
          fallbackElement={<div>fallbackElement</div>}
        />
  );
}

export default App;
