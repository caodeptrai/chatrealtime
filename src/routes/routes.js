import config from '../config';

// Pages

import ChatRoom from '../pages/ChatRoom/ChatRoom';
import Profile from '../pages/Profile/Profile';
// Public routes
const publicRoutes = [
    { path: config.routes.chatroom, component: ChatRoom },
    { path: config.routes.profile, component: Profile },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

