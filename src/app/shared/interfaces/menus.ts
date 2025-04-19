export interface Menus {
  index: number;
  title: string;
  icon: string;
  targetUrl: string;
  filhos: Menus[] | null;
}