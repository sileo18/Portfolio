import saveAs from "file-saver";
import { BsDownload } from "react-icons/bs";

interface DownloadProps {
  lang: boolean
}

export default function Download( { lang }: DownloadProps ) {

    const downloadFile = () => {
      const fileContent = "../assets/gitMartket.png";
      const fileType = "png";
      const blob = new Blob([fileContent], { type: fileType });
      saveAs(blob, "gitMarket.png");
    }
  

  return (
    
    <button onClick={downloadFile} className='flex gap-2 items-center border border-solid border-black rounded-lg px-2 py-2 hover:bg-gray-200 transition-colors'>
            <BsDownload />
            {lang ? "Baixe meu currículo" : "Download my resume"}
    </button>
  )
}