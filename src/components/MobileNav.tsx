import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react"

import Nav from "./Nav"
import Logo from "./Logo"
import Socials from "./Socials"

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
          <AlignJustify className="curosr-pointer" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-center justify-between h-full py-8">
            <div className="flex flex-col items-center gap-y-32">
              <Logo />
              <Nav 
              containerStyle='flex flex-col iteams-center gap-y-6'
              linkStyle="text-2xl"
              />
            </div>
            <Socials containerStyles='flex gap-x-4' iconsStyle='text-2xl' />
          </div>
        </SheetContent>
    </Sheet>
  );
};

export default MobileNav;