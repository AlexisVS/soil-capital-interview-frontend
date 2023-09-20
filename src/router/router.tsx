import { DashboardSection } from '@features/dashboard';
import { HomePage, LoginPage } from '@pages';
import { Guard } from '@utils';
import { Navigate, Route, Routes } from 'react-router-dom';
import PhotoPage from '@/pages/PhotoPage/PhotoPage';

/**
 * Main Router
 */
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Guard guards={['authenticated']} target={<HomePage />} />}>
                <Route index element={<DashboardSection />} />
            </Route>
            <Route path="/photos" element={<Guard guards={['authenticated']} target={<PhotoPage />} />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default Router;
