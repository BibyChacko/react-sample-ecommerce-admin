import React from 'react';
import "./module.css";
import {NotificationsNoneOutlined,Language,Settings} from '@mui/icons-material/';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Happycules</span>
        </div>
        <div className="topRight">
        <div className="topBarIconContainer">
            <Language />
          </div>
          <div className="topBarIconContainer">
            <NotificationsNoneOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
          <img src="https://yt3.ggpht.com/yti/ADpuP3MA46BcXluTrXjM8c9heD0NU6ThldpdCE1NNebL1w=s88-c-k-c0x00ffffff-no-rj" alt="My profile" className="avatar" />
        </div>
      </div>
    </div>
  );
}
