import { faArrowAltCircleRight, faUserCircle, faCog, faHome, faShoppingCart, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout, Menu, Button, Divider } from 'antd';
import { inject, observer } from "mobx-react";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./app.scss";
import HomePage from "./pages/home/home";
import AppStore from "./store";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

@inject("appStore")
@observer
export default class App extends React.Component<{
  appStore: AppStore;
  history: any;
}> {
  render() {
    return (
      <Layout>
        <Sider
          width="290"
          className="sider"
        >
          <div>
            <div className="logo m-4 mt-5" >
              <img src="/assets/img/logo.svg" height="26px" alt="Logo" />
            </div>
            <Menu mode="inline" className="menu"
              defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                <span className="nav-text ml-2">Get Started</span>
              </Menu.Item>

              <Menu.Item key="2">
                <FontAwesomeIcon icon={faHome} />
                <span className="nav-text ml-2">Overview</span>
              </Menu.Item>

              <Menu.Item key="3">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="nav-text ml-2">Payment</span>
              </Menu.Item>

              <Menu.Item key="4">
                <FontAwesomeIcon icon={faTools} />
                <span className="nav-text ml-2">Payment Tools</span>
              </Menu.Item>

              <Menu.Item key="5">
                <FontAwesomeIcon icon={faCog} />
                <span className="nav-text ml-2">Settings</span>
              </Menu.Item>
            </Menu>
          </div>


          <div>
            <div className="m-3 support-links">
              <Button type="primary" block>
                Guide
              </Button>

              <Button className="mt-2" type="primary" block>
                Help & Support
              </Button>
            </div>

            <Divider className="m-0" style={{ opacity: 0.3 }} />
            <Menu mode="inline" className="user-menu py-2">
              <SubMenu
                key="sub2"
                title={
                  <span className="d-flex align-items-center">
                    <FontAwesomeIcon size="2x" icon={faUserCircle} />
                    <span className="ml-2">Ferdi Gökdemir</span>
                  </span>
                }
              >
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
              </SubMenu>
            </Menu>
          </div>

        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={() => <Redirect to="/" />} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Relaypay ©2020. All rights reserved!</Footer>
        </Layout>
      </Layout>
    );
  }
}
