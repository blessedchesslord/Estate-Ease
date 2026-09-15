

const BookVisitor = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full pt-20">
      <div>
        <h1>Hello <span>Clayton,</span></h1>
        <p>Expecting a visitor? Kindly fill in the neccesary information about your visitor.</p>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center w-full">
          <label htmlFor="">Full name</label>
          <input type="text" className="border border-gray-500" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <label htmlFor="">Email</label>
          <input type="text" className="border border-gray-500 w-full" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <label htmlFor="">Phone number</label>
          <input type="number" className="border border-gray-500 w-full" />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center w-full">
            <label htmlFor="">Date in </label>
            <input type="date" className="border border-gray-500 w-full" />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <label htmlFor="">Time in</label>
            <input type="time" className="border border-gray-500 w-full" />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <label htmlFor="">Date out</label>
            <input type="date" className="border border-gray-500 w-full" />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <label htmlFor="">Time out</label>
            <input type="time" className="border border-gray-500 w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <label htmlFor="">Visitor's Address</label>
          <input type="text" className="border border-gray-500 w-full" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <label htmlFor="">Purpose of visit</label>
          <input type="text" className="border border-gray-500 w-full" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <label htmlFor="">Upload visitor's image</label>
          <input type="text" className="border border-gray-500 w-full" />
        </div>
      </div>
      <p>A one time code will be sent to your visitor's mobile number for clearance at the entrance.</p>
      <button>Add Visitor</button>
    </div>
    </>
  )
}

export default BookVisitor