

function Button({label, inconURl}) {
  return (
    <button className=" flex justify-center items-center bg-coral-red border-coral-red leading-none font-montserrat px-7 py-4 border rounded-full text-lg gap-2">
        {
            label
        }
      <img className=" ml-2 rounded-full w-5 h-5" src={inconURl} alt="simple button" />
    </button>
  )
}

export default Button
