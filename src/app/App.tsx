// src/app/App.tsx
import { DesignSystemDemo } from './DesignSystemDemo';
import { ThemeProvider } from '../design-system/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="boilerplate-theme">
      <div className="min-h-screen bg-bg-body text-text-primary">
        <DesignSystemDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;
