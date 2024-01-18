export default function LoadingUI() {
    return(
        <div className="container mx-auto jy-loading">
            <div className="flex items-center justify-center my-10">
                <div>
                    <div className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                    <p className="mt-2">Loading...</p>
                </div>
            </div>
        </div>
    )
}