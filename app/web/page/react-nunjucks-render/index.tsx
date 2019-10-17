
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { CSR } from '../../framework/app'
import Home from './view/home'


export default CSR(observer(Home));