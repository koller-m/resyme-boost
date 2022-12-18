const ResymeBoost = () => {
  return (
    <div className="max-width-[768px] flex flex-col items-center p-2 py-16">
      <h1 className="text-4xl tracking-wider font-bold pb-4">Resyme Boost</h1>
      <form className="py-8 text-right">
        <p className="py-2 text-left">Enter job description:</p>
        <div>
          <textarea
            name="job"
            rows="10"
            className="w-[300px] sm:w-[600px] border-none rounded-[3px] text-black pl-1 mb-4"
          ></textarea>
        </div>
        <button className="bg-[#e0ffff] text-[#5f7470] py-1 px-2 rounded-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResymeBoost;
