export default function Carriers() {
  return (
    <div className="min-h-screen pt-24 px-2">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Carriers</h1>
        <div  className="  flex h-[200px] w-full md:flex-col gap-1 md:hidden">
          <div className="w-[65%] h-full border-4 border-blue-500 rounded-l-2xl bg-black md:w-full md:rounded-none">
             picture 1 
          </div>
          <div className="w-[35%] h-full border-4 border-green-500 rounded-r-2xl bg-black md:w-full md:rounded-none">
             picture 2
          </div>
         
        </div>
         <div className="flex gap-4">
            <p>My Resume </p>
            <button>click me </button>
          </div>
      </div>
    </div>
  );
}


