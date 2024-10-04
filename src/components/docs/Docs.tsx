import React from "react";
import { HomeHero, HomeFeature } from "rspress/theme";

const Docs = () => {
    return (
        <div style={{ position: "absolute", width: "100%", left: 0, top: 75 }}>
            <HomeHero
                frontmatter={{
                    title: "hepic.cloud",
                    tagline: "Next-Gen VoIP/RTC Monitoring & Troubleshooting",
                    hero: {
                        name: "",
                        text: "<p className='text-3xl'>Telecom Observability</p>",
                        titleSuffix: "Next-Gen VoIP Monitoring",
                        actions: [
                            { text: "About", link: "/about", theme: "alt" },
                            { text: "Book Demo", link: "/signup", theme: "brand" },
                        ],
                        image: {
                            src: "/hepic_cloud_logo.svg",
                            alt: "hepic.cloud",
                        },
                    },
                }}
                routePath="/"
            />

            <HomeFeature
                frontmatter={{
                    title: "Features",
                    titleSuffix: "hepic.cloud",
                    features: [
                        {
                            title: "Realtime",
                            details:
                                "<p className='text-center'>Real-Time Search, Tracking, Analytics</p>",
                            icon: "📞",
                            span: 3,
                        },
                        {
                            title: "Performant",
                            details:
                                "<p className='text-center'>ClickHouse + DuckDB OLAP<br>w/ NVMe lightspeed storage</p>",
                            icon: "⚡",
                            span: 3,
                        },

                        {
                            title: "Unmetered",
                            details:
                                "<p className='text-center'>Unlimited packets per Server. No soft limiters.</p>",
                            icon: "💸",
                            span: 3,
                        },

                        {
                            title: "Distributed",
                            details:
                                "<p className='text-center'>Horizontally Scalable, Distributed Queries</p>",
                            icon: "⚗️",
                            span: 3,
                        },
                    ],
                }}
                routePath="/"
            />
        </div>
    );
};

export default Docs;
