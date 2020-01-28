import ConfigStore from '../page/antd/store/config';

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