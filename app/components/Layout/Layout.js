import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import _ from 'lodash';

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

const responsiveBreakpoints = {
    'xs': { max: 575.8 },
    'sm': { min: 576, max: 767.8 },
    'md': { min: 768, max: 991.8 },
    'lg': { min: 992, max: 1199.8 },
    'xl': { min: 1200 }
};

class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        sidebarSlim: PropTypes.bool,
        history: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.state = {
            sidebarHidden: false,
            navabrHidden: false,
            footerHidden: false,
            sidebarCollapsed: false,
            screenSize: '',
            animationsDisabled: true,

            pageTitle: config.siteTitle,
            pageDescription: config.siteDescription,
            pageKeywords: config.siteKeywords
        };

        this.lastLgSidebarCollapsed = false;
    }

    componentDidMount() {
        // Determine the current window size
        // and set it up in the context state
        const layoutAdjuster = () => {
            const { screenSize } = this.state;
            let currentScreenSize;

            _.forOwn(responsiveBreakpoints, (value, key) => {
                const queryParts = [
                    `${ _.isUndefined(value.min) ? '' : `(min-width: ${value.min}px)` }`,
                    `${ _.isUndefined(value.max) ? '' : `(max-width: ${value.max}px)`}`
                ];
                const query = _.compact(queryParts).join(' and ');

                if (window.matchMedia(query).matches) {
                    currentScreenSize = key;
                }
            });

            if (screenSize !== currentScreenSize) {
                this.setState({ screenSize: currentScreenSize });
                this.updateLayoutOnScreenSize(currentScreenSize);
            }
        };

        // Add window initialization
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => {
                setTimeout(layoutAdjuster.bind(this), 0);
            });
            
            layoutAdjuster();

            window.requestAnimationFrame(() => {
                this.setState({ animationsDisabled: false });
            });
        }
        // Add document initialization
        if (typeof document !== 'undefined') {
            this.bodyElement = document.body;
            this.documentElement = document.documentElement;
        }
        // Listen for Navigation
        this.unlistenNavigation = this.props.history.listen(() => {
            // Hide overlay sidebar
            if (
                !this.state.sidebarCollapsed && (
                    this.state.screenSize === 'xs' ||
                    this.state.screenSize === 'sm' ||
                    this.state.screenSize === 'md'
                )
            ) {
                this.setState({ sidebarCollapsed: true });
            }
            // Scroll to top
            if (this.bodyElement && this.documentElement) {
                this.documentElement.scrollTop = this.bodyElement.scrollTop = 0;
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // Prevent content scrolling in overlay mode
        if (
            this.bodyElement && this.documentElement && (
                this.state.screenSize === 'xs' ||
                this.state.screenSize === 'sm' ||
                this.state.screenSize === 'md'
            )
        ) {
            if (prevState.sidebarCollapsed !== this.state.sidebarCollapsed) {
                // Most of the devices
                const styleUpdate = this.state.sidebarCollapsed ? {
                        overflowY: 'auto',
                        touchAction: 'auto',
                        height: 'auto'
                    }: {
                        overflowY: 'hidden',
                        touchAction: 'none',
                        height: '100%'
                    }
                Object.assign(this.bodyElement.style, styleUpdate);
                Object.assign(this.documentElement.style, styleUpdate);
            }
        }
    }

    updateLayoutOnScreenSize(screenSize) {
        if (
            screenSize === 'md' ||
            screenSize === 'sm' ||
            screenSize === 'xs'
        ) {
            // Save for recovering to lg later
            this.lastLgSidebarCollapsed = this.state.sidebarCollapsed;
            this.setState({ sidebarCollapsed: true });
        } else {
            this.setState({ sidebarCollapsed: this.lastLgSidebarCollapsed });
        }
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
                            sidebarSlim: !!this.props.sidebarSlim && this.state.sidebarCollapsed && (
                                this.state.screenSize === 'lg' || this.state.screenSize === 'xl'
                            ),
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

    componentWillUnmount() {
        this.unlistenNavigation();
    }
}

const routedLayout = withRouter(Layout);

export { routedLayout as Layout };
