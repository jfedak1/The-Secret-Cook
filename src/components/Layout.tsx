import { Outlet } from 'react-router-dom';

const Layout = () =>  {
    return (
        <div>
            <div className="fixed bottom-0 left-0 w-full h-24 bg-blue-500">
                {/* App bar content here */}
            </div>
            <main>
                <Outlet /> {/* Render child routes here */}
            </main>
        </div>
    );
};

export default Layout;
