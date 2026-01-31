const CardSkeleton = () => {
    /*return (
      <div className="flex flex-col h-90 space-y-2 w-100 p-2 rounded-md bg-neutral-200">
          <div className="h-50  w-full rounded-md bg-gray-50 animate-pulse"></div>
          <h1 className="h-7 w-1/2 mt-2 bg-gray-50 animate-pulse rounded-sm"></h1>
          <h1 className="h-5 w-full mt-2 bg-gray-50 animate-pulse rounded-sm"></h1>
          <div className="flex gap-2">
              <img className="rounded-full size-10 bg-gray-50 animate-pulse mt-2"/>
              <div className="flex flex-col mt-2">
                  <h1 className="h-2 mt-2 w-9 rounded-sm bg-gray-50 animate-pulse"></h1>
                  <p className="h-2 w-12 mt-2 rounded-sm bg-gray-50"></p>
              </div>
          </div>
      </div>
    )
      */
     return(
    <div className="flex flex-col shrink-0 space-y-2 w-full max-w-sm min-h-88 p-2 rounded-md bg-neutral-200">
        <div className="h-48 w-full rounded-md bg-gray-50 animate-pulse"></div>

        <h1 className="h-7 min-h-7 w-1/2 mt-2 bg-gray-50 animate-pulse rounded-sm"></h1>
        <h1 className="h-5 min-h-5 w-full mt-2 bg-gray-50 animate-pulse rounded-sm"></h1>

        <div className="flex gap-2 items-start">
            <img className="rounded-full size-10 shrink-0 bg-gray-50 animate-pulse mt-2" />
            <div className="flex flex-col mt-2 w-full">
                <h1 className="h-2 min-h-2 w-9 rounded-sm bg-gray-50 animate-pulse"></h1>
                <p className="h-2 min-h-2 w-12 mt-2 rounded-sm bg-gray-50 animate-pulse"></p>
            </div>
        </div>
    </div>
     )

}

export default CardSkeleton