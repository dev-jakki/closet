export interface Menus {
  index: number;
  title: string;
  icon: string;
  link: string;
  filhos: Menus[] | null;
}