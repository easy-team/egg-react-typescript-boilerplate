import ConfigStore from '../page/home/store/config';

export interface TabProps {
  title: string;
  keywords: string;
  description: string;
  message: {
    text: string
  };
}

export interface StoreProps {
  configStore?: ConfigStore
}