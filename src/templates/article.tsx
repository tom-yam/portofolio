import * as React from "react"
import { ArticleContext } from "../../gatsby-node"
import PageLayout from "../components/layout"
import ProductAd from "../components/article/detail/ad"
import TwoColumnLayout from "../components/layout/two-column"
import ArticleDetail from '../components/article/detail'
import ProfileComponent from "../components/profile"
import { Affix } from "antd"
import RecommendList from "../components/article/detail/recommend"
import ShareButtons from "../components/article/detail/share-buttons"
import SEO from "../components/seo"

type Props = {
    pageContext: ArticleContext
}

const Component: React.FC<Props> = ({ pageContext }) => (
    <PageLayout>
        <SEO title={pageContext.article.title} description={pageContext.article.description.description} meta={[]} />
        <ShareButtons pageContext={pageContext} />
        <TwoColumnLayout
            left={
                <>
                    <ArticleDetail pageContext={pageContext} />
                    <RecommendList pageContext={pageContext} />
                </>
            }
            right={
                <Affix offsetTop={10}>
                    <ProductAd />
                    <div style={{ marginTop: '20px' }}>
                        <ProfileComponent />
                    </div>
                </Affix>
            }
        />
    </PageLayout >
)

export default Component