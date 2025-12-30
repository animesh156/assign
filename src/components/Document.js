import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function Document({ activeTab }) {
  return (
    <div className="px-14 text-[#13343B] grid grid-cols-12 gap-8">

      {/* LEFT COLUMN (9 cols) */}
      <div className="col-span-9 py-7">
        <h2 className="text-[25px] font-medium mb-2">{activeTab}</h2>

        <p className="text-[15px] w-[700px]">
          Need to fix the position of the image. Personalized message is closing
          after scrolling. Buttons width need to be fixed
        </p>

        <hr className="border-t-2 mt-10 border-[#ECECE7]" />

        <h3 className="font-semibold mt-5 text-[15px]">Activity log</h3>

        <ul className="text-[#849494] flex flex-col gap-1 font-medium text-[12px] mt-4">
          <li className="flex items-center gap-2">
            <div className="relative w-4 h-4 rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
            </div>
            <span>harris changed description • 2 mins ago</span>
          </li>

          <div className="h-5 ml-1.5 w-[2px] bg-[#ECECE7]" />

          <li className="flex items-center gap-2">
            <div className="relative w-4 h-4 rounded-full overflow-hidden">
              <Image src="/tick.png" alt="tick" fill className="object-cover" />
            </div>
            <span>harris set the status to In use • 2 mins ago</span>
          </li>

          <div className="h-5 ml-1.5 w-[2px] bg-[#ECECE7]" />

          <li className="flex items-center gap-2">
            <div className="relative w-4 h-4 rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
            </div>
            <span>harris created new document • 1 week ago</span>
          </li>
        </ul>

        <div className="relative mt-8 h-20 px-3 py-3 rounded-md border-2 shadow shadow-[#0000000B] border-[#ECECE7] text-[#849494]">
          <p>Leave a comment</p>
          <GoArrowRight
            size={24}
            className="absolute bottom-3 right-3 text-[#849494]"
          />
        </div>
      </div>

      {/* RIGHT COLUMN (3 cols) */}
      <div className="col-span-3 text-[#849494] py-7 px-3.5 border-l-2 h-[488px] border-[#ECECE7] pl-6">
        <h3 className="font-medium mb-2">Properties</h3>

        <p className="mt-8">Last Updated</p>
        <p className="text-[#13343B] font-medium mt-4">
          Dec 2, 2025. 11:41 AM
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <p>Admin</p>
          <div className="flex items-center gap-2">
            <div className="relative w-4 h-4 rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
            </div>
            <span className="text-[#13343B]">Harris</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <p>Status</p>
          <div className="flex items-center gap-2">
            <div className="relative w-4 h-4 rounded-full overflow-hidden">
              <Image src="/tick.png" alt="tick" fill className="object-cover" />
            </div>
            <span className="text-[#13343B]">In use</span>
          </div>
        </div>
      </div>

    </div>
  );
}
