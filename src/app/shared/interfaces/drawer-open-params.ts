import { DrawerContent } from "./drawer-content";
import { DrawerOptions } from "./drawer-options";

export class DrawerOpenParams {
  title: string = ''; 
  drawerContent: DrawerContent = <DrawerContent>{};
  options?: DrawerOptions = new DrawerOptions();
}