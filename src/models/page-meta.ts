export interface MetaOG {
  image?: {
    url: string;
    width: string;
    height: string;
  };
  title?: string;
  description?: string;
}

export interface PageMeta {
  description: string;
  title?: string;
  og?: MetaOG;
}
