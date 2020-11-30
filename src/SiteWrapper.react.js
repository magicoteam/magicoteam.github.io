// @flow

import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Site, Nav, Button, RouterContextProvider } from 'tabler-react';

const navBarItems = [
  {
    value: 'Página Inicial',
    to: '/',
    icon: 'home',
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: 'Formulários',
    to: '/form-elements',
    icon: 'check-square',
    LinkComponent: withRouter(NavLink),
  },
  {
    value: 'Rodar Hashtags',
    to: '/hashtags',
    icon: 'check-square',
    LinkComponent: withRouter(NavLink),
  },
  {
    value: 'Galeria',
    to: '/gallery',
    icon: 'image',
    LinkComponent: withRouter(NavLink),
  },
];

const accountDropdownProps = {
  avatarURL: './demo/faces/male/4.jpg',
  name: 'João Paulo',
  description: 'Administrador',
  options: [
    { icon: 'user', value: 'Profile', href: '/profile' },
    { icon: 'settings', value: 'Settings', href: '/register' },
    { icon: 'mail', value: 'Inbox', badge: '6', href: '/email' },
    { icon: 'send', value: 'Message', href: '/email' },
    { isDivider: true },
    { icon: 'help-circle', value: 'Need help?', href: '/login' },
    { icon: 'log-out', value: 'Sign out', href: '/store' },
  ],
};

class SiteWrapper extends Component {
  state = {
    notificationsObjects: [
      {
        unread: true,
        avatarURL: 'demo/faces/male/41.jpg',
        message: (
          <React.Fragment>
            <strong>Nathan</strong> pushed new commit: Fix page load performance
            issue.
          </React.Fragment>
        ),
        time: '10 minutes ago',
      },
      {
        unread: true,
        avatarURL: 'demo/faces/female/1.jpg',
        message: (
          <React.Fragment>
            <strong>Alice</strong> started new task: Tabler UI design.
          </React.Fragment>
        ),
        time: '1 hour ago',
      },
      {
        unread: false,
        avatarURL: 'demo/faces/female/18.jpg',
        message: (
          <React.Fragment>
            <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
          </React.Fragment>
        ),
        time: '2 hours ago',
      },
    ],
  };

  render() {
    const notificationsObjects = this.state.notificationsObjects || [];
    const unreadCount = this.state.notificationsObjects.reduce(
      (a, v) => a || v.unread,
      false
    );
    return (
      <Site.Wrapper
        headerProps={{
          href: '/',
          alt: 'Instatistic',
          imageURL: './assets/img/logo.png',
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
              <Button
                href="https://github.com/tabler/tabler-react"
                target="_blank"
                outline
                size="sm"
                RootComponent="a"
                color="primary"
              >
                Código Fonte
              </Button>
            </Nav.Item>
          ),
          notificationsTray: {
            notificationsObjects,
            markAllAsRead: () =>
              this.setState(
                () => ({
                  notificationsObjects: this.state.notificationsObjects.map(
                    (v) => ({ ...v, unread: false })
                  ),
                }),
                () =>
                  setTimeout(
                    () =>
                      this.setState({
                        notificationsObjects: this.state.notificationsObjects.map(
                          (v) => ({ ...v, unread: true })
                        ),
                      }),
                    5000
                  )
              ),
            unread: unreadCount,
          },
          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
