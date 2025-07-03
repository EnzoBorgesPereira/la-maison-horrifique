import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from "./shared/ThemeContext.tsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SessionsPage } from './pages/SessionsPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { LegalPage } from './pages/LegalPage.tsx';
import { HomePage } from './pages/HomePage.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        element: <HomePage />,
        index: true
      },
      {
        path: 'booking',
      },
      {
        element: <SessionsPage />,
        path: 'games',
        children: []
      },
      {
        path: 'session/:id',
      },
      {
        element: <ContactPage />,
        path: 'contact'
      },
      {
        element: <LegalPage />,
        path: 'legal'
      }

    ]
  }
]);

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>,
  )
});