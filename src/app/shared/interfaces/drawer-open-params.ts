import { DrawerContent } from "./drawer-content";

export class DrawerOpenParams {
  title: string = '';
  width?: number;
  drawerContent: DrawerContent = {} as DrawerContent;
}
