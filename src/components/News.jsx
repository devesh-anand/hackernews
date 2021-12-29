import React from "react";

const news = () => {
   return (
      <div class="container-sm bg-light flex-row main-card p-3">
         <div class="content px-2 py-1 mx-1 d-flex flex-row no-wrap">
            <div class="col-sm-3 pe-4 extras">by andrelaszlo</div>
            <div class="col-sm extras">(emilydamstra.com)</div>
         </div>

         <div class="content main-heading px-2 mx-1 d-flex">
            Please, enough with the dead butterflies (2017)
         </div>

         <div class="content p-2 mx-1 d-flex justify-content-between extras">
            <div>
               <i class="bi bi-caret-up"></i>182
            </div>
            <div>
               <i class="bi bi-chat-right-text"></i> 36
            </div>
            <div>4 hours ago</div>
         </div>
      </div>
   );
};

export default news;
