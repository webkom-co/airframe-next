import { Layout } from './Layout';
import { LayoutContent } from './LayoutContent';
import { LayoutNavbar } from './LayoutNavbar';
import { LayoutSidebar } from './LayoutSidebar';
import { withPageConfig } from './withPageConfig';

Layout.Sidebar = LayoutSidebar;
Layout.Navbar = LayoutNavbar;
Layout.Content = LayoutContent;

export default Layout;
export { withPageConfig };
