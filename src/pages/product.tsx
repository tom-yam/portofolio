import React from "react"
import PageLayout from "../components/layout/index"
import ProductComponent from "../components/product";
import SEO from "../components/seo"

const ContactPage = () => (
    <PageLayout backgroundColor="#f0f5ff">
        <SEO title="プロダクト" meta={[]} description="これまでに作成したプロダクト一覧です" />
        <ProductComponent />
    </PageLayout>
)

export default ContactPage