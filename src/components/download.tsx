import { BsDownload } from "react-icons/bs";

export default function Download() {
  return (
    <button className='flex gap-2 items-center border border-solid border-black rounded-lg px-2 py-2 hover:bg-gray-400 transition-colors'>
            <BsDownload />
            Download my resume
          </button>
  )
}