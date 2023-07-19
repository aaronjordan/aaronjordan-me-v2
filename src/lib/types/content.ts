export interface NavigationEntry {
  id: string;
  title: string;
  route: string;
  icon: string;
  hidden: boolean | null;
}

export interface ProjectEntry {
  title: string;
  company: string;
  body: string;
  links: {
    [key: string]: string;
  };
  imageUrl: string;
  caption: string;
  featured?: boolean;
}

export interface ContentData {
  navigation: NavigationEntry[];
  projects: ProjectEntry[];
  pages: {
    [key: string]: {
      bodyUrl: string;
    };
  };
}
