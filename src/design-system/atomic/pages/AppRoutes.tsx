import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutBase } from '../templates/LayoutBase';
import { HomePage } from './HomePage';
import { ComponentsPage } from './ComponentsPage';

// Lazy loading para páginas adicionales
const DocumentationPage = React.lazy(() => import('./DocumentationPage'));
const ExamplesPage = React.lazy(() => import('./ExamplesPage'));
const NotFoundPage = React.lazy(() => import('./NotFoundPage'));

export const AppRoutes: React.FC = () => {
    return (
        <Router>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* Rutas principales */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/components" element={<ComponentsPage />} />

                    {/* Rutas lazy loaded */}
                    <Route path="/docs" element={<DocumentationPage />} />
                    <Route path="/examples" element={<ExamplesPage />} />

                    {/* Rutas con layout personalizado */}
                    <Route path="/admin/*" element={
                        <LayoutBase showHeader={false} showFooter={false}>
                            <div>Admin Panel</div>
                        </LayoutBase>
                    } />

                    {/* Rutas de autenticación */}
                    <Route path="/auth/*" element={
                        <LayoutBase showHeader={false} showFooter={false}>
                            <div>Authentication</div>
                        </LayoutBase>
                    } />

                    {/* Redirecciones */}
                    <Route path="/home" element={<Navigate to="/" replace />} />
                    <Route path="/get-started" element={<Navigate to="/docs" replace />} />

                    {/* 404 - debe ir al final */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </React.Suspense>
        </Router>
    );
};
