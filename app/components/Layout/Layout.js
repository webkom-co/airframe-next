import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { LayoutContent } from './LayoutContent';
import { LayoutNavbar } from './LayoutNavbar';
import { LayoutSidebar } from './LayoutSidebar';
import { PageConfigContext } from './PageConfigContext';
import config from './../../../config';

const findChildByType = (children, targetType) => {
    let result;

    React.Children.forEach(children, (child) => {
        if (child.type.layoutPartName === targetType.layoutPartName) {
            result = child;
        }
    });

    return result;
}

class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        sidebarSlim: PropTypes.bool
    }

    constructor(props) {
        super(props);

        this.state = {
            sidebarHidden: false,
            navabrHidden: false,
            footerHidden: false,
            sidebarCollapsed: false,

            pageTitle: config.siteTitle,
            pageDescription: config.siteDescription,
            pageKeywords: config.siteKeywords
        };
    }

    toggleSidebar() {
        this.setState({
            sidebarCollapsed: !this.state.sidebarCollapsed
        });
    }

    render() {
        const { children } = this.props;
        const sidebar = findChildByType(children, LayoutSidebar);
        const navbar = findChildByType(children, LayoutNavbar);
        const content = findChildByType(children, LayoutContent);

        return (
            <PageConfigContext.Provider
                value={{
                    ...this.state,
                    sidebarSlim: !!this.props.sidebarSlim,

                    toggleSidebar: this.toggleSidebar.bind(this)
                }}
            >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{ this.state.pageTitle }</title>
                    <link rel="canonical" href={ config.siteCannonicalUrl } />
                    <meta name="description" content={ this.state.pageDescription } />
                    <meta name="keywords" content={ this.state.pageKeywords } />
                </Helmet>
                <div className="layout">
                    { 
                        !this.state.sidebarHidden && React.cloneElement(sidebar, {
                            sidebarSlim: !!this.props.sidebarSlim && this.state.sidebarCollapsed,
                            sidebarCollapsed: !this.props.sidebarSlim && this.state.sidebarCollapsed
                        })
                    }

                    <div className="layout__wrap">
                        { !this.state.navabrHidden && navbar }

                        { content }
                    </div>
                </div>
            </PageConfigContext.Provider>
        );
    }
}

export { Layout };
