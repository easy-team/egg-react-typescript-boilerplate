import { CSSProperties } from 'react';
import { observable, action } from 'mobx';
class ConfigStore {
  // 定义状态并使其可观察
  @observable size = 2;
  @observable themeStyle: CSSProperties ={
    backgroundColor: '#red',
    fontSize: `${this.size}px`
  }

  changeTheme(){
    this.themeStyle = {
      ...this.themeStyle,
      fontSize: `${this.size++}px`
    }
  }
}
export default ConfigStore;