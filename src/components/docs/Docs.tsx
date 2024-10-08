import { HomeHero, HomeFeature } from "rspress/theme";

const Docs = () => {
    return (
        <div className="ml-[-200px] mr-[-200px] p-0">
            <HomeHero
                frontmatter={{
                    title: "hepic.cloud",
                    titleSuffix: "Next-Gen VoIP Monitoring & Troubleshooting",
                    hero: {
                        name: "",
                        text: "<p className='text-subtitle'>hepic.</p>",
                        tagline: "Next-Gen Telecom Observability",
                        actions: [
                            { text: "About Us", link: "/about", theme: "alt" },
                            {
                                text: "Features",
                                link: "/docs/features",
                                theme: "alt",
                            },
                            {
                                text: "Book a Demo",
                                link: "/signup",
                                theme: "brand",
                            },
                        ],
                        image: {
                            src: "/hepic_cloud_logo.png",
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
                                "<p className='text-center'>Instant VoIP Search, Tracking and Powerful Analytics</p>",
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
                                "<p className='text-center'>Unlimited packets per Server. Only limited by resources.</p>",
                            icon: "💸",
                            span: 3,
                        },

                        {
                            title: "Ubiquitous",
                            details:
                                "<p className='text-center'>Distributed, Clusterable and Horizontally Scalable</p>",
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
