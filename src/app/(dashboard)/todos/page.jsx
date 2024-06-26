import React from 'react';
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";

const Page = async () => {
    return (
        <div className="grid grid-cols-12 gap-5">

            <div className="col-span-2">
                <SidebarComponent />
            </div>
            <div className="col-span-10">
                <NavbarComponent/>
                <ListBoardComponentHeader/>
                <div className={"grid grid-cols-12 gap-5"}>
                    <div className={"col-span-8 mx-10"}>
                        <TodoCardComponent/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Page;



// import {getAllWorkspacesService} from "@/services/workspace.Service";
//
// const dashboardPage = async () => {
//

//     return (
//         <main>
//             {
//                 workspaceData?.data?.map((workspace) => (
//
//                 <div key={workspace.workSpaceId}>
//                     <h1>{workspace.workspaceName}</h1>
//                 </div>
//             ))}
//         </main>
//     );
// }
//
// export default dashboardPage;