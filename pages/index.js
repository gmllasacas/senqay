import Layout from "@/components/layout/Layout";
import Section1 from '@/components/sections/Section1';
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import Section4 from "@/components/sections/Section4";
import Section5 from "@/components/sections/Section5";

export default function HomeSaas() {
    return (
        <>
            <Layout siteContentClass="pt0 pb0">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </Layout>
        </>
    )
}