export default function Loading() {
  return (


    
    <div className="container mx-auto">
      
      <div className="grid sm:grid-cols-7 grid-cols-2 gap-11">
        <div className="col-span-full md:col-span-2">
            <div className="hobbies-page-wrapper grid md:justify-items-center p-10">
            <ul className="hobbies-infor">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
            </div>
        </div>
        <div className="col-span-full md:col-span-5"> 
            <div className="md:pl-0 pl-5">
                <div className="hobbies-heading">
                  <div className="title "><h1 className="h-10 bg-[var(--jy-black)] animate-pulse mb-5"></h1></div>
                  <div className="h-5 bg-[var(--jy-black)] animate-pulse "></div>
                </div>
                <div className="hobbies-heading-box">
                  <div className="post-infor-wrapper">
                      <div className="post-author "></div>
                      <div className="post-date "></div>
                  </div>
                </div>

                <div className="hobbies-section">
                  <div className="sns-widget-wrapper">
                    <ul className="sns-widget">
                      <li className="h-full bg-[var(--jy-black)] animate-pulse"></li>
                      <li className="h-full bg-[var(--jy-black)] animate-pulse"></li>
                      <li className="h-full bg-[var(--jy-black)] animate-pulse"></li>
                      <li className="h-full bg-[var(--jy-black)] animate-pulse"></li>
                      <li className="h-full bg-[var(--jy-black)] animate-pulse"></li>
                    </ul>
                </div>
                </div> 
                <div className="content mt-10 h-96 bg-[var(--jy-black)] animate-pulse ">
                  
                </div>
            </div>

        </div>
 
        </div>

    </div>
  );
}