import { DrawerContent } from "./drawer-content";
import { DrawerOptions } from "./drawer-options";

// export class DrawerOpenParams {
//   title: string = '';
//   width?: number;
//   drawerContent: DrawerContent = {} as DrawerContent;
// }

export class DrawerOpenParams {
  title: string = ''; 
  modalContent: DrawerContent = <DrawerContent>{};
  options?: DrawerOptions = new DrawerOptions();
}