export interface Menus {
  index: number;
  title: string;
  icon: string;
  link: string;
  filhos: MenusFilhos[] | null;
}

type MenusFilhos = Omit<Menus, 'filhos'>;
