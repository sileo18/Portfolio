export default function Education() {
  return (
    <div className='flex flex-col gap-2 items-center'>
            <div className='bg-black w-[140x]'><p className='text-2xl font-bold px-2 w-[140px] text-white'>Education</p></div>            
            <div className='flex flex-col gap-2'>
              <div>
                <p className='font-semibold text-xl'>Systems Development Technician</p>
                <p>Senac EAD {'\n'} 2023 - 2025</p>
              </div>

              <div>
                <p className='font-semibold text-xl'>High School</p>
                <p>Colégio San Marino {'\n'} 2019 - 2021</p>
              </div>
            </div>
          </div>
  )
}