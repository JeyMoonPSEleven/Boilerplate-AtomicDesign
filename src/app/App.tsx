// src/app/App.tsx
import { AppRoutes } from '../design-system/atomic/pages/AppRoutes';
import { ThemeProvider } from '../design-system/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="boilerplate-theme">
      <div className="min-h-screen bg-bg-body text-text-primary">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
