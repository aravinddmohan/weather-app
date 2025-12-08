export default function SearchBox({city,setCity,onSearch})  //object destructuring-props stuff//
{
return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-3 py-2 rounded-lg text-black outline-none"
      />
      <button
        onClick={onSearch}
        className="bg-black/40 hover:bg-black/60 transition-all duration-300 px-4 py-2 rounded-lg font-semibold shadow-lg"
      >
        Go
      </button>
    </div>
  );
}