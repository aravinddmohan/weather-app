export default function Error({message}){
    return(
    <div className="bg-red-500/80 mt-3 p-2 rounded-lg">
      {message}
    </div>
  );
}