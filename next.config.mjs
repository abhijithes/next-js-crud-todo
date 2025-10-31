import withPWA from "next-pwa";

const config = {
    reactStrictMode: true,
    images: {
        domains: [],
    },
};

export default withPWA({
    dest: "public",
    disable: false,
    register: true,
    skipWaiting: true,
})(config);
