import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from '../components/DashPosts';
import DashUsers from "../components/DashUsers";
import DashComments from '../components/DashComments';

function Dashboard() {
    const location = useLocation();
    const [tab, seTab] = useState('');
    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if(tabFromUrl){
            seTab(tabFromUrl);
        }
        // console.log(tabFromUrl);
    },[location.search])
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="md:w-56" >
                <DashSidebar />
            </div>
            {tab === 'profile' && <DashProfile />}
            {tab === 'posts' && <DashPosts />}
            {tab === 'users' && <DashUsers />}
            {tab === 'comments' && <DashComments />}
        </div>
    )
}

export default Dashboard
