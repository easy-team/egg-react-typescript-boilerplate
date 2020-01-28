import { CSSProperties } from 'react';
import { observable, action } from 'mobx';
class AppStore {
  // 定义状态并使其可观察
  @observable number = 0;
  @observable size = 24;
  @observable style: CSSProperties ={
    textAlign: 'center',
    marginTop: '40px',
    fontSize: `${this.size}px`
  }

  plus(){
    this.number++;
    this.style = {
      ...this.style,
      fontSize: `${this.size++}px`
    }
  }
}
export default AppStore;