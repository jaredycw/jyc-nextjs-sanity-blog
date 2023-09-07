export default function Loading() {
  return (
    <div className="container mx-auto">
      
      <section className="post-heading">
    
        <div className="w-full h-96 mb-8 bg-[var(--jy-black)] rounded-sm animate-pulse featured-wrapper"></div>
        <div className="flex flex-col gap-y-2 post-heading-box">
          <div className="w-full h-10 bg-[var(--jy-black)] rounded-xl animate-pulse post-heading"></div>
          <div className="w-full h-6 bg-[var(--jy-black)] rounded-xl animate-pulse post-infor-wrapper"></div>
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
      
      </section>
      <div className="flex flex-col gap-y-2 my-8">
        <div className="w-25 h-8 bg-[var(--jy-black)] rounded-xl animate-pulse"></div>
        <div className="w-25 h-8 bg-[var(--jy-black)] rounded-xl animate-pulse"></div>
        <div className="w-25 h-8 bg-[var(--jy-black)] rounded-xl animate-pulse"></div>
      </div>

    </div>
  );
}